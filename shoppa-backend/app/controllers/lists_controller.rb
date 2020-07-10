class ListsController < ApplicationController

    # returns a list of the current user's lists
    def index
        all_lists = current_user.lists.map{|list|
            {
                name: list.name,
                id: list.id,
                icon: list.icon,
                products: list.listjson ? JSON.parse(list.listjson) : [] 
            }
        }
        render json:{ all_lists: all_lists }, status: :ok   
    end

    def show
        list = List.find_by(id: params[:id])

        if !list
            render json:{error: "list not found"}, status: :not_found
        elsif !list.users.any?{|user| user.id == current_user.id} 
            render json: {error: "not authorized"}, status: :unauthorized
        else
            list_hash = {
                name: list.name,
                id: list.id,
                icon: list.icon,
                products: list.listjson ? JSON.parse(list.listjson) : [] 
            }
            render json: list_hash, status: :ok
        end
    end

    def create
        
        tidied_up_products = params[:list][:products].map{|item|
            itemHash = {
                product:item[:product],
                category:item[:category],
                checked:item[:checked],
            }
            itemHash
        }
        incoming_list_as_hash = {
            name: params[:list][:name],
            icon: params[:list][:icon],
            listjson: JSON(tidied_up_products),
        }        
        
        new_list=List.create(incoming_list_as_hash)
        
        # puts "???????????????????????????????????????"
        # puts params
        # puts "???????????????????????????????????????"

        Right.create(list: new_list, user: current_user)

        if new_list.valid?
            list_as_hash = {
                id: new_list.id,
                name: new_list.name,
                icon: new_list.icon,
                products: "",
            }
            render json: list_as_hash , status: :created
        else
            render json:{ error: "failed to create list"}, status: :not_acceptable
        end
    end

    def destroy
        id = params[:id]
        list = List.find_by(id: params[:id])

        if !list
            render json:{error: "list not found"}, status: :not_found
        elsif !list.users.any?{|user| user.id == current_user.id} 
            render json: {error: "not authorized"}, status: :unauthorized
        else            
            list.destroy
            if !List.find_by(id:id) #List was succesfully deleted
                render json: {message: "success"}, status: :accepted
            else
                render json:{ error: "failed to delete list"}, status: :not_implemented
            end
        end
    end

    def update
        id = params[:id]
        list = List.find_by(id: params[:id])

        if !list
            render json:{error: "list not found"}, status: :not_found
        elsif !list.users.any?{|user| user.id == current_user.id} 
            render json: {error: "not authorized"}, status: :unauthorized
        else
            tidied_up_products = params[:list][:products].map{|item|
                itemHash = {
                    product:item[:product],
                    category:item[:category],
                    checked:item[:checked],
                }
                itemHash
            }
            incoming_list_as_hash = {
                name: params[:list][:name],
                icon: params[:list][:icon],
                listjson: JSON(tidied_up_products),
            }             

            list_save_success = list.update(incoming_list_as_hash)

            outgoing_list_as_hash = {
                name: list.name,
                id: list.id,
                icon: list.icon,
                products: list.listjson ? JSON.parse(list.listjson) : [] ,
            }

            if list_save_success
                render json: outgoing_list_as_hash, status: :accepted
            else
                render json: {error: "list not saved"}, stats: :not_implemented
            end
        end

    end







    private

    def list_params
        params.require(:list).permit(:name, :icon, :products)
    end



end
