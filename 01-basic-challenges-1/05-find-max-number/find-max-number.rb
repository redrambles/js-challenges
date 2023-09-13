def find_max_number(arr)
  return nil if arr.empty?
  arr.reduce { |max, num| (num > max) ? num : max }
end

puts find_max_number([2, 1, 9, 16, 10])
