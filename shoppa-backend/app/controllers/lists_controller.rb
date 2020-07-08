class ListsController < ApplicationController

    # returns a list of the current user's lists
    def index
        all_lists = current_user.lists.map{|list|
            {
                name: list.name,
                id: list.id,
                products: list.listjson ? JSON.parse(list.listjson) : [] 
            }
        }
        render json: all_lists       
    end

    def create
        new_list = List.create(list_params)

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
        list = List.find_by(id: params [:id])

        if !list
            render json:{error: "list not found"}, status: :not_found
        elsif !list.users.any?{|user| user.id == current_user.id} 
            render json: {error: "not authorized"}, status: :unauthorized
        else
            list_json = JSON(list_params[:products])

            list_hash = {
                name: list_params[:name],
                icon: list_params[:icon],
                listjson: list_json
            }

            list_save_success = list.update(list_hash)

            list_hash[:id] = list.id

            if list_save_success
                render json: list_hash, status: :accepted
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
