# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


dan = {
  username: "dan",
  email: "dan@dan.com",
  password: "password",
  profile_img: "https://i.imgur.com/nwRqeIJ.jpg"
}

matt = {
  username: "matt",
  email: "matt@matt.com",
  password: "password",
  profile_img: "https://i.imgur.com/nwRqeIJ.jpg"
}

User.create(dan)
User.create(matt)

exp = {
  exp_type: "bad",
  init_rating: 3,
  second_rating: 5,
  final_rating: 10,
  description: "This is the description",
  user_id: 1
}

exp2 = {
  exp_type: "chad",
  init_rating: 10,
  second_rating: 10,
  final_rating: 10,
  description: "I am a description",
  user_id: 2
}

Experience.create(exp)
Experience.create(exp2)
