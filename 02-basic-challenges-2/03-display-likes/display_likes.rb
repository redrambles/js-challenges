def display_likes(arr)
  return "no one likes this" if arr.empty?

  if arr.length == 1
    "#{arr[0]} likes this"
  elsif arr.length == 2
    "#{arr[0]} and #{arr[1]} like this"
  elsif arr.length == 3
    "#{arr[0]}, #{arr[1]} and #{arr[2]} like this"
  else
    "#{arr[0]}, #{arr[1]} and #{arr.length - 2} others like this"
  end
end

puts display_likes([])
puts display_likes(["Peter"])
puts display_likes(["Jacob", "Alex"])
puts display_likes(["Max", "John", "Mark"])
puts display_likes(["Alex", "Jacob", "Mark", "Max", "Jill"])
