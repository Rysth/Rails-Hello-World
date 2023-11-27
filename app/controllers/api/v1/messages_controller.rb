class Api::V1::MessagesController < ApplicationController
  def index
    @message = Message.order('RANDOM()').first
    if @message
      render json: { message: @message.text, status: 'Success' }
    else
      render json: { message: 'No messages found', status: 'Error' }
    end
  end
end
