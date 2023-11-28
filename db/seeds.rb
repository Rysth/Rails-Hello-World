require 'faker'

5.times do
  Message.create(text: Faker::Lorem.sentence)
end
