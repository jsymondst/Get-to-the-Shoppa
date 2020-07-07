class ListsController < ApplicationController

    # returns a list of the current user's lists
    def index
        all_lists = current_user.lists.map{|list|
            {
                name: list.name,
                products: JSON.parse(list.listjson)
            }
        }
        render json: all_lists       

    end
end
