def array_intersection(arr1, arr2)
  unique_arr1 = arr1.uniq
  unique_arr2 = arr2.uniq

  unique_arr2.select { |num| unique_arr1.include?(num) }
end

intersection = array_intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
puts intersection.inspect
