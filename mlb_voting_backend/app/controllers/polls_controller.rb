class PollsController < ApplicationController

    def index
        polls = Poll.all
        render json: polls
    end

    def create
       poll = Poll.create(poll_params)
       render json: poll 
    end

    def update
        poll = Poll.find(params[:id])
        poll.update(poll_params)
        render json: poll
    end

    def destroy
        poll = Poll.find(params[:id])
        poll.destroy
        render json: {}
    end

    private

    def poll_params
        params.require(:poll).permit(:question)
    end

end
