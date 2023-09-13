def remove_duplicates(array)
  new_array = []
  array.each do |char|
    if !new_array.include?(char)
      new_array.push(char)
    end
  end
  new_array
end

# OR

def remove_duplicates2(array)
  unique = Set.new(array)
  unique.to_a
end

puts remove_duplicates([
  1,
  2,
  3,
  4,
  5,
  5,
  5,
  6,
  7,
  8,
  "hello",
  "hello",
  true,
  true
])

puts remove_duplicates2([
  1,
  2,
  3,
  4,
  5,
  5,
  5,
  6,
  7,
  8,
  "hello",
  "hello",
  true,
  true
])
