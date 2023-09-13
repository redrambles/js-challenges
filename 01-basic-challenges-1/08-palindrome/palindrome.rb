def is_palindrome?(string)
  # If it's not lowercase character or number, remove
  clean_string = string.downcase.gsub(/[^a-z0-9]/, "")
  clean_string == clean_string.reverse
end

puts is_palindrome?("racecar")
puts is_palindrome?("racecars")
