class Movie < ApplicationRecord
 
  has_attached_file :cover, default_url: "/images/movies/unknown.jpeg"
  validates_attachment_content_type :cover, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  validates :title, presence: true, uniqueness: true
  validates :summary, presence: true 
  validates :cover, presence: true 
  validates :release, presence: true 
  
  paginates_per 20
  has_many :reviews

  has_many :casts
  has_many :members, through: :casts, dependent: :destroy
  
  has_many :favorites 
  has_many :users, through: :favorites, dependent: :destroy

  has_many :movie_genres 
  has_many :genres, through: :movie_genres, dependent: :destroy
  
  attribute :formatted_release_date, :string 
  attribute :average_rating, :integer 
  attribute :cover_url, :string  
  attribute :cover_name, :string
  attribute :genres_type 

  def cover_url 
    cover.url 
  end

  def cover_name 
    cover.original_filename 
  end

  def formatted_release_date 
    release.respond_to?(:strftime) ? release.strftime("%B %d, %Y"): ""
  end

  def average_rating 
    scores = reviews.pluck(:score)
    
    total_rating = 0 
    scores.group_by(&:itself).transform_values!(&:size).each do |keys, value| 
      total_rating+=(keys*value) 
    end 
    scores.length == 0 ? 0  : total_rating/scores.length
  end

  def genres_type 
    genres.pluck(:type)
  end
end