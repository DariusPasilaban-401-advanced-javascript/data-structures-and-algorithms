# Merge Sort

Implementation

Let's say we start off with this array:

[2, 4, 3, 1, 6, 5]

Through the next step following "merge sort" concept in would look like this:

[2, 4, 3] [1, 6, 5]

[2, 4] [3] [1, 6] [5]

[2, 4] [3] [1, 6] [5] - for the first array since 2 is already less than 4, no need to shift around values. Same thing applies for the 3rd array with values 1 and 6. But let's say their positioning is [6,1], then merge sort will shift this into [1,6] because we need an ascending values from left to right.

[2, 3, 4] [1, 5, 6]

[1, 2, 3, 4, 5, 6]