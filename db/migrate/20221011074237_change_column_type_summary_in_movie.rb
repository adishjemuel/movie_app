class ChangeColumnTypeSummaryInMovie < ActiveRecord::Migration[5.1]
  def change
    change_column(:movies, :summary, :text)
  end
end
