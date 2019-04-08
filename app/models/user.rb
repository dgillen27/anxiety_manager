class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true
  has_many :experiences

  def to_token_payload
    {
      sub: id,
      email: email,
      username: username,
      profile_img: profile_img,
    }
  end
end
