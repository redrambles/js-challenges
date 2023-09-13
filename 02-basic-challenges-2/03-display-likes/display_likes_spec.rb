require_relative "display_likes"

RSpec.describe "Display likes" do
  it "returns the correct string for different cases" do
    expect(display_likes([])).to eq("no one likes this")
    expect(display_likes(["Peter"])).to eq("Peter likes this")
    expect(display_likes(["Jacob", "Alex"])).to eq("Jacob and Alex like this")
    expect(display_likes(["Max", "John", "Mark"])).to eq("Max, John and Mark like this")
    expect(display_likes(["Alex", "Jacob", "Mark", "Max"])).to eq("Alex, Jacob and 2 others like this")
    expect(display_likes(["Alex", "Jacob", "Mark", "Max", "Jill"])).to eq("Alex, Jacob and 3 others like this")
  end
end
