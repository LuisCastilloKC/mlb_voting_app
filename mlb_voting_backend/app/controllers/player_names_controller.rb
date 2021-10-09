class PlayerNamesController < ApplicationController

    def create
        player_name = PlayerName.create(player_name_params)
        render json: player_name
    end

    def update
        player_name = PlayerName.find(params[:id])
        player_name.update(player_name_params)
        render json: player_name
    end

    private

    def player_name_params
        params.require(:player_name).permit(:name, :votes, :poll_id)
    end


end