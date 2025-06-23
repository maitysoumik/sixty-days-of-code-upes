const startDate = new Date("2025-06-01");
const today = new Date();
const dayDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;

// Question data per batch
const data = {
  honors: [
    {
      day: 1,
      questions: [
        {
          title: "Rotate Array",
          link: "https://leetcode.com/problems/rotate-array/",
          "video": "https://youtu.be/4wSbko3fkPI?si=RpMAQjItojgQQzH_"
        },
        {
          title: "Squares of a Sorted Array",
          link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
          "video" : "https://youtu.be/Rnzy_SHpHgs?si=zL7A0eh3L2YrDkJo"
        },
      ],
    },
    {
      day: 2,
      questions: [
        {
          title: "Maximum Subarray (Kadane's Algorithm)",
          link: "https://leetcode.com/problems/maximum-subarray/",
          "video" : "https://youtu.be/cSYu78GWou0?si=gVNi-F5P7X0mmN3w"
        },
        {
          title: "Product of array except self",
          link: "https://leetcode.com/problems/product-of-array-except-self/",
          "video" : "https://youtu.be/CkpC_jIovzA?si=7IJKsXemLLmC1EEs"
        },
      ],
    },
    {
      day: 3,
      questions: [
        {
          title: "Majority Element",
          link: "https://leetcode.com/problems/majority-element/",
          "video" : "https://youtu.be/2gLHhWewoNU?si=yB-y2hAjxkSyhwOg"
        },
        {
          title: "Majority Element II",
          link: "https://leetcode.com/problems/majority-element-ii/",
          "video" : "https://youtu.be/3xgJJFlD6H0?si=fsodPwxlbHX45-BT"
        },
      ],
    },
    {
      day: 4,
      questions: [
        {
          title: "Next Greater Element III",
          link: "https://leetcode.com/problems/next-greater-element-iii/",
          "video" : "https://youtu.be/hC4n4w7zqfk?si=yBp4oObI9bYNfPqR"
        },
        {
          title: "Max Chunks To Make Sorted",
          link: "https://leetcode.com/problems/max-chunks-to-make-sorted/",
          "video" : "https://youtu.be/uL8tiyZIDlE?si=8Ne4nrQE2tfyo1O_"
        },
      ],
    },
    {
      day: 5,
      questions: [
        {
          title: "Max Chunks To Make Sorted II",
          link: "https://leetcode.com/problems/max-chunks-to-make-sorted-ii/",
          "video" : "https://youtu.be/PFSZAoDGqLQ?si=oPxF0ej-frENwKRn"
        },
        {
          title: "Number of Subarrays with Bounded Maximum",
          link: "https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/",
          "video" : "https://youtu.be/25GVXkqnRMo?si=nmp3TFssSRJefDY0"
        },
      ],
    },
    {
      day: 6,
      questions: [
        {
          title: "First Missing Positive",
          link: "https://leetcode.com/problems/first-missing-positive/",
          "video" : "https://youtu.be/11Tzat-f2-g?si=lUHqi6c9_4vZXCK6"
        },
        {
          title: "Range Addition",
          link: "https://www.lintcode.com/problem/range-addition/description",
          "video" : "https://youtu.be/odHiEFXCgww?si=Ione7rfV_QY2y_70" 
        },
      ],
    },
    {
      day: 7,
      questions: [
        {
          title: "Minimum Number of Platforms",
          link: "https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/",
          "video" : "https://youtu.be/BYeNvDDhw5k?si=1QW8QmVVvkB9HMyj"
        },
        {
          title: "Trapping Rain Water",
          link: "https://leetcode.com/problems/trapping-rain-water/",
          "video" : "https://youtu.be/kcn1dR4K3-w?si=OncZr33tzap9Kfsk"
        },
      ],
    },
    {
      day: 8,
      questions: [
        {
          title: "Container With Most Water",
          link: "https://leetcode.com/problems/container-with-most-water/",
          "video" : "https://youtu.be/G82ye6pzmS4?si=Zt7dyQpnsJrjEd_o"
        },
        {
          title: "Two Sum",
          link: "https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/",
          "video" : "https://youtu.be/86zKKSTA_5s?si=gHR5dGBoiviWClQ9"
        },
      ],
    },
    {
      day: 9,
      questions: [
        {
          title: "Find a Pair with the Given Difference",
          link: "https://www.geeksforgeeks.org/find-a-pair-with-the-given-difference/",
          "video" : "https://youtu.be/l6WzFPM2Ui0?si=EpHA8ZEnG5xpXQQ_"
        },
        {
          title: "Permutations",
          link: "https://leetcode.com/problems/permutations/",
        },
      ],
    },
    {
      day: 10,
      questions: [
        {
          title: "Permutation Sequence",
          link: "https://leetcode.com/problems/permutation-sequence/",
        },
        {
          title: "Combination Sum",
          link: "https://leetcode.com/problems/combination-sum/",
        },
      ],
    },
    {
      day: 11,
      questions: [
        {
          title: "Combination Sum II",
          link: "https://leetcode.com/problems/combination-sum-ii/",
        },
        {
          title: "Letter Combinations of a Phone Number",
          link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        },
      ],
    },
    {
      day: 12,
      questions: [
        { title: "N-Queens", link: "https://leetcode.com/problems/n-queens/" },
        {
          title: "Rat in a Maze Problem",
          link: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
        },
      ],
    },
    {
      day: 13,
      questions: [
        {
          title: "Capacity To Ship Packages Within D Days",
          link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
          "video" : "https://youtu.be/hy9dxQKFuLY?si=bENWKibOVj3vMLI5"
        },
        {
          title: "Painter's Partition Problem II",
          link: "https://www.geeksforgeeks.org/problems/the-painters-partition-problem1535/1",
          "video" : "https://youtu.be/QeEMVSMzIbA?si=KcuIEGFTxUEHZvMz"
        },
      ],
    },
    {
      day: 14,
      questions: [
        {
          title: "Search in Rotated Sorted Array",
          link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
          "video" : "https://youtu.be/46KFbU1FbzE?si=7vsYGCcSgVA6upOD"
        },
        {
          title: "Search in Rotated Sorted Array II",
          link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
          "video" : "https://youtu.be/aKUq-FRaYEc?si=QgI8qFzstVtszjxV"
        },
      ],
    },
    {
      day: 15,
      questions: [
        {
          title: "Allocate Books",
          link: "https://www.interviewbit.com/problems/allocate-books/",
          "video" : "https://youtu.be/N7N5lIl6p8U?si=zpAMT8IrH6Np-vvP"
        },
        {
          title: "Median of Two Sorted Arrays",
          link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
          "video" :
        },
      ],
    },
    {
      day: 16,
      questions: [
        {
          title: "Reverse Linked List",
          link: "https://leetcode.com/problems/reverse-linked-list/",
          "video" : "https://youtu.be/iTMk53WzSbI?si=1xUxIZXeUyaksYqx"
        },
        {
          title: "Find the Middle of the Linked List",
          link: "https://www.geeksforgeeks.org/write-a-c-function-to-print-the-middle-of-the-linked-list/",
          "video" : "https://youtu.be/I4E6RTIEtGY?si=I1Mv_U4Mz8acnpLj"
        },
      ],
    },
    {
      day: 17,
      questions: [
        {
          title: "Detect Loop in a Linked List",
          link: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/",
          "video" : "https://youtu.be/yVteumdf4YI?si=H_7YezXXexAo04pz"
        },
        {
          title: "Clone a Linked List with Next and Random Pointer",
          link: "https://www.geeksforgeeks.org/a-linked-list-with-next-and-arbit-pointer/",
          "video" : "https://youtu.be/A0mqB_Y7Wpw?si=xulsyVAKG4c6p1pZ"
        },
      ],
    },
    {
      day: 18,
      questions: [
        {
          title: "Linked List Cycle II",
          link: "https://leetcode.com/problems/linked-list-cycle-ii/description/",
          "video" : "https://youtu.be/DLef_UXAM1M?si=uAVwRLCe6YlR1OQz"
        },
        {
          title: "LRU Cache",
          link: "https://leetcode.com/problems/lru-cache/",
        },
      ],
    },
    {
      day: 19,
      questions: [
        {
          title: "Next Greater Element",
          link: "https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1",
          "video" : "https://youtu.be/kD7WqxgozLc?si=EWGCIKNEjCfqNju7"
        },
        {
          title: "Largest Rectangular Area Histogram",
          link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
          "video" : "https://youtu.be/Kqeqfd3f5zA?si=xiZBsmvH7ZR64Cqo"
        },
      ],
    },
    {
      day: 20,
      questions: [
        {
          title: "Max Rectangle",
          link: "https://www.geeksforgeeks.org/problems/max-rectangle/1",
        },
        {
          title: "Valid Parentheses",
          link: "https://leetcode.com/problems/valid-parentheses/",
        },
      ],
    },
    {
      day: 21,
      questions: [
        {
          title: "Min Stack",
          link: "https://leetcode.com/problems/min-stack/",
        },
        {
          title: "K Stacks in a Single Array",
          link: "https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/",
        },
      ],
    },
    {
      day: 22,
      questions: [
        {
          title: "Infix Evaluation",
          link: "https://leetcode.com/problems/basic-calculator/",
        },
        {
          title: "K Reverse in a Queue",
          link: "https://www.geeksforgeeks.org/reversing-first-k-elements-queue/",
        },
      ],
    },
    {
      day: 23,
      questions: [
        {
          title: "K Queue",
          link: "https://www.geeksforgeeks.org/efficiently-implement-k-queues-single-array/",
        },
        {
          title: "Preorder Traversal",
          link: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
        },
      ],
    },
    {
      day: 24,
      questions: [
        {
          title: "Check Whether Arithmetic Progression Can Be Formed",
          link: "https://www.geeksforgeeks.org/check-whether-arithmetic-progression-can-formed-given-array/",
        },
        {
          title: "Grid Illumination",
          link: "https://leetcode.com/problems/grid-illumination/",
        },
      ],
    },
    {
      day: 25,
      questions: [
        {
          title: "Brick Wall",
          link: "https://leetcode.com/problems/brick-wall/",
        },
        {
          title: "Subarray Sum Equals K",
          link: "https://leetcode.com/problems/subarray-sum-equals-k/",
        },
      ],
    },
    {
      day: 26,
      questions: [
        {
          title: "Subarray Sums Divisible by K",
          link: "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
        },
        {
          title: "Insert Delete GetRandom O(1)",
          link: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
        },
      ],
    },
    {
      day: 27,
      questions: [
        {
          title: "Insert Delete GetRandom O(1) - Duplicates Allowed",
          link: "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/",
        },
        {
          title: "Longest Consecutive Sequence",
          link: "https://leetcode.com/problems/longest-consecutive-sequence/",
        },
      ],
    },
    {
      day: 28,
      questions: [
        {
          title: "Find All Anagrams in a String",
          link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        },
        {
          title: "Minimum Window Substring",
          link: "https://leetcode.com/problems/minimum-window-substring/",
        },
      ],
    },
    {
      day: 29,
      questions: [
        {
          title: "HashMap Implementation",
          link: "https://www.pepcoding.com/resources/online-java-foundation/hashmap-and-heap/hashmap-official/ojquestion",
        },
        {
          title: "Count Subarrays with Equal Number of 0s and 1s",
          link: "https://www.geeksforgeeks.org/count-subarrays-equal-number-1s-0s/",
        },
      ],
    },
    {
      day: 30,
      questions: [
        {
          title: "Substring with Equal Number of 0s, 1s, and 2s",
          link: "https://www.geeksforgeeks.org/substring-equal-number-0-1-2/",
        },
        {
          title: "Kth Largest Element in an Array",
          link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        },
      ],
    },
    {
      day: 31,
      questions: [
        {
          title: "Minimum Number of Refueling Stops",
          link: "https://leetcode.com/problems/minimum-number-of-refueling-stops/",
        },
        {
          title: "Minimum Cost to Connect Sticks",
          link: "https://leetcode.com/problems/minimum-cost-to-connect-sticks/",
        },
      ],
    },
    {
      day: 32,
      questions: [
        {
          title: "Employee Free Time",
          link: "https://leetcode.com/problems/employee-free-time/",
        },
        {
          title: "Find Median from Data Stream",
          link: "https://leetcode.com/problems/find-median-from-data-stream/",
        },
      ],
    },
    {
      day: 33,
      questions: [
        {
          title: "Inorder Traversal",
          link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        },
        {
          title: "Postorder Traversal",
          link: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
        },
      ],
    },
    {
      day: 34,
      questions: [
        {
          title: "Right Side View",
          link: "https://leetcode.com/problems/binary-tree-right-side-view/",
        },
        {
          title: "Left View",
          link: "https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
        },
      ],
    },
    {
      day: 35,
      questions: [
        {
          title: "Top View",
          link: "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
        },
        {
          title: "Bottom View",
          link: "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
        },
      ],
    },
    {
      day: 36,
      questions: [
        {
          title: "Vertical Order",
          link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
        },
        {
          title: "Diagonal Traversal",
          link: "https://www.geeksforgeeks.org/diagonal-traversal-of-binary-tree/",
        },
      ],
    },
    {
      day: 37,
      questions: [
        {
          title: "Boundary Traversal",
          link: "https://leetcode.com/problems/boundary-of-binary-tree/",
        },
        {
          title: "Binary Tree Cameras",
          link: "https://leetcode.com/problems/binary-tree-cameras/",
        },
      ],
    },
    {
    day: 38,
    questions: [
      {
        title: "Max Path Sum",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
      },
      {
        title: "Delete Node in BST",
        link: "https://leetcode.com/problems/delete-node-in-a-bst/"
      }
    ]
  },
  {
    day: 39,
    questions: [
      {
        title: "Construct from Inorder and Preorder",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
      },
      {
        title: "Next Right Pointer in Each Node",
        link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/"
      }
    ]
  },
  {
    day: 40,
    questions: [
      {
        title: "Convert a Binary Tree to Circular Doubly Linked List",
        link: "https://www.geeksforgeeks.org/convert-a-binary-tree-to-a-circular-doubly-link-list/"
      },
      {
        title: "Conversion of Sorted DLL to BST",
        link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/"
      }
    ]
  },
  {
    day: 41,
    questions: [
      {
        title: "Lowest Common Ancestor",
        link: "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1"
      },
      {
        title: "Serialize and Deserialize Binary Tree",
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
      }
    ]
  },
  {
    day: 42,
    questions: [
      {
        title: "Longest Increasing Subsequence",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/"
      },
      {
        title: "Unbounded Knapsack",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/"
      }
    ]
  },
  {
    day: 43,
    questions: [
      {
        title: "Building Bridges",
        link: "https://www.geeksforgeeks.org/dynamic-programming-building-bridges/"
      },
      {
        title: "Russian Doll Envelopes",
        link: "https://leetcode.com/problems/russian-doll-envelopes/"
      }
    ]
  },
  {
    day: 44,
    questions: [
      {
        title: "Box Stacking",
        link: "https://practice.geeksforgeeks.org/problems/box-stacking/1"
      },
      {
        title: "Paint House",
        link: "https://www.lintcode.com/problem/paint-house/description"
      }
    ]
  },
  {
    day: 45,
    questions: [
      {
        title: "No. of Binary Strings Without Consecutive 1s",
        link: "https://www.geeksforgeeks.org/count-number-binary-strings-without-consecutive-1s/"
      },
      {
        title: "Possible Ways to Construct the Building",
        link: "https://www.geeksforgeeks.org/total-number-of-possible-binary-search-trees-with-n-keys/"
      }
    ]
  },
  {
    day: 46,
    questions: [
      {
        title: "Total Number of BSTs",
        link: "https://www.geeksforgeeks.org/total-number-of-possible-binary-search-trees-with-n-keys/"
      },
      {
        title: "No. of Balanced Parentheses Sequence",
        link: ""
      }
    ]
  },
  {
    day: 47,
    questions: [
      {
        title: "Min Cost Path",
        link: "https://leetcode.com/problems/minimum-path-sum/"
      },
      {
        title: "Cherry Pickup",
        link: "https://leetcode.com/problems/cherry-pickup/"
      }
    ]
  },
  {
    day: 48,
    questions: [
      {
        title: "Cherry Pickup 2",
        link: "https://leetcode.com/problems/cherry-pickup-ii/"
      },
      {
        title: "Best Time to Buy and Sell Stock",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
      }
    ]
  },
  {
    day: 49,
    questions: [
      {
        title: "Number of Islands",
        link: "https://leetcode.com/problems/number-of-islands"
      },
      {
        title: "Number of Distinct Islands",
        link: "https://leetcode.com/problems/number-of-distinct-islands"
      }
    ]
  },
  {
    day: 50,
    questions: [
      {
        title: "Rotting Oranges",
        link: "https://leetcode.com/problems/rotting-oranges"
      },
      {
        title: "Bipartite Graph",
        link: "https://leetcode.com/problems/is-graph-bipartite/"
      }
    ]
  },
  {
    day: 51,
    questions: [
      {
        title: "Bus Routes",
        link: "https://leetcode.com/problems/bus-routes/"
      },
      {
        title: "Prim's Algorithm",
        link: "https://www.spoj.com/problems/MST/"
      }
    ]
  },
  {
    day: 52,
    questions: [
      {
        title: "Dijkstra's Algorithm",
        link: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/"
      },
      {
        title: "Swim in Rising Water",
        link: "https://leetcode.com/problems/swim-in-rising-water/"
      }
    ]
  },
  {
    day: 53,
    questions: [
      {
        title: "0-1 Matrix",
        link: "https://leetcode.com/problems/swim-in-rising-water/"
      },
      {
        title: "Bellman Ford",
        link: "https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/"
      }
    ]
  },
  {
    day: 54,
    questions: [
      {
        title: "Strongly Connected Components (Kosaraju's Algorithm)",
        link: "https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1"
      },
      {
        title: "Mother Vertex",
        link: "https://practice.geeksforgeeks.org/problems/mother-vertex/1"
      }
    ]
  },
  {
    day: 55,
    questions: [
      {
        title: "Kahn's Algorithm",
        link: "https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/"
      },
      {
        title: "Alien Dictionary",
        link: "https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/"
      }
    ]
  },
  {
    day: 56,
    questions: [
      {
        title: "Number of Islands II",
        link: "https://leetcode.com/problems/regions-cut-by-slashes"
      },
      {
        title: "Regions Cut By Slashes",
        link: "https://leetcode.com/problems/regions-cut-by-slashes"
      }
    ]
  }
  ],

  courage: [
  {
    day: 1,
    questions: [
      {
        title: "Search Insert Position",
        link: "https://leetcode.com/problems/search-insert-position/description/?envType=problem-list-v2&envId=array"
      },
      {
        title: "Count Primes",
        link: "https://leetcode.com/problems/count-primes/description/"
      }
    ]
  },
  {
    day: 2,
    questions: [
      {
        title: "Reverse String",
        link: "https://leetcode.com/problems/reverse-string/description/"
      },
      {
        title: "Find All Numbers Disappeared in an Array",
        link: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/?envType=problem-list-v2&envId=array"
      }
    ]
  },
  {
    day: 3,
    questions: [
      {
        title: "Assign Cookies",
        link: "https://leetcode.com/problems/assign-cookies/description/?envType=problem-list-v2&envId=array"
      },
      {
        title: "Teemo Attacking",
        link: "https://leetcode.com/problems/teemo-attacking/description/?envType=problem-list-v2&envId=array"
      }
    ]
  },
  {
    day: 4,
    questions: [
      {
        title: "Keyboard Row",
        link: "https://leetcode.com/problems/keyboard-row/description/?envType=problem-list-v2&envId=array"
      },
      {
        title: "Relative Ranks",
        link: "https://leetcode.com/problems/relative-ranks/description/?envType=problem-list-v2&envId=array"
      }
    ]
  },
  {
    day: 5,
    questions: [
      {
        title: "Array Partition",
        link: "https://leetcode.com/problems/array-partition/description/?envType=problem-list-v2&envId=array"
      },
      {
        title: "Concatenation of Array",
        link: "https://leetcode.com/problems/concatenation-of-array/description/"
      }
    ]
  },
  {
    day: 6,
    questions: [
      {
        title: "Number of Senior Citizens",
        link: "https://leetcode.com/problems/number-of-senior-citizens/description/"
      },
      {
        title: "Is Subsequence",
        link: "https://leetcode.com/problems/is-subsequence/description/"
      }
    ]
  },
  {
    day: 7,
    questions: [
      {
        title: "Find Pivot Index",
        link: "https://leetcode.com/problems/find-pivot-index/description/"
      },
      {
        title: "Isomorphic Strings",
        link: "https://leetcode.com/problems/isomorphic-strings/description/"
      }
    ]
  },
  {
    day: 8,
    questions: [
      {
        title: "Unique Email Addresses",
        link: "https://leetcode.com/problems/unique-email-addresses/description/"
      },
      {
        title: "Maximum Number of Balloons",
        link: "https://leetcode.com/problems/maximum-number-of-balloons/description/"
      }
    ]
  },
  {
    day: 9,
    questions: [
      {
        title: "Design HashSet",
        link: "https://leetcode.com/problems/design-hashset/description/"
      },
      {
        title: "Height Checker",
        link: "https://leetcode.com/problems/height-checker/description/"
      }
    ]
  },
  {
    day: 10,
    questions: [
      {
        title: "Divide Array into Equal Pairs",
        link: "https://leetcode.com/problems/divide-array-into-equal-pairs/description/"
      },
      {
        title: "Special Array",
        link: "https://leetcode.com/problems/special-array-i/description/"
      }
    ]
  },
    {
    "day": 11,
    "questions": [
      {
        "title": "Score of String",
        "link": "https://leetcode.com/problems/score-of-a-string/description/"
      },
      {
        "title": "Minimum Index Sum of Two Lists",
        "link": "https://leetcode.com/problems/minimum-index-sum-of-two-lists/description/?envType=problem-list-v2&envId=array"
      }
    ]
  },
  {
    "day": 12,
    "questions": [
      {
        "title": "Merge Strings Alternately",
        "link": "https://leetcode.com/problems/merge-strings-alternately/description/"
      },
      {
        "title": "Sort Array by Parity",
        "link": "https://leetcode.com/problems/sort-array-by-parity/description/"
      }
    ]
  },
  {
    "day": 13,
    "questions": [
      {
        "title": "Merge Strings Alternately",
        "link": "https://leetcode.com/problems/merge-strings-alternately/description/"
      },
      {
        "title": "Valid Palindrome II",
        "link": "https://leetcode.com/problems/valid-palindrome-ii/description/"
      }
    ]
  },
  {
    "day": 14,
    "questions": [
      {
        "title": "Minimum Recolors to Get K Consecutive Black Blocks",
        "link": "https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/description/"
      },
      {
        "title": "Contains Duplicate II",
        "link": "https://leetcode.com/problems/contains-duplicate-ii/description/"
      }
    ]
  },
  {
    "day": 15,
    "questions": [
      {
        "title": "Smallest Distinct Window",
        "link": "https://www.geeksforgeeks.org/problems/smallest-distant-window3132/1"
      },
      {
        "title": "Implement Stack Using Array",
        "link": "https://www.geeksforgeeks.org/problems/implement-stack-using-array/1"
      }
    ]
  },
  {
    "day": 16,
    "questions": [
      {
        "title": "Implement Queue Using Array",
        "link": "https://www.geeksforgeeks.org/problems/implement-queue-using-array/1"
      },
      {
        "title": "Implement Stack Using Queues",
        "link": "https://leetcode.com/problems/implement-stack-using-queues/description/"
      }
    ]
  },
  {
    "day": 17,
    "questions": [
      {
        "title": "Implement Queue Using Stacks",
        "link": "https://leetcode.com/problems/implement-queue-using-stacks/description/"
      },
      {
        "title": "Valid Parentheses",
        "link": "https://leetcode.com/problems/valid-parentheses/description/"
      }
    ]
  },
  {
    "day": 18,
    "questions": [
      {
        "title": "Baseball Game",
        "link": "https://leetcode.com/problems/baseball-game/description/"
      },
      {
        "title": "Design Linked List",
        "link": "https://leetcode.com/problems/design-linked-list/description/"
      }
    ]
  },
  {
    "day": 19,
    "questions": [
      {
        "title": "Linked List Cycle",
        "link": "https://leetcode.com/problems/linked-list-cycle/description/"
      },
      {
        "title": "Reverse Linked List",
        "link": "https://leetcode.com/problems/reverse-linked-list/description/"
      }
    ]
  },
  {
    "day": 20,
    "questions": [
      {
        "title": "Remove Linked List Elements",
        "link": "https://leetcode.com/problems/remove-linked-list-elements/description/"
      },
      {
        "title": "Middle of the Linked List",
        "link": "https://leetcode.com/problems/middle-of-the-linked-list/description/"
      }
    ]
  },
      {
    "day": 21,
    "questions": [
      {
        "title": "Palindrome",
        "link": "https://www.geeksforgeeks.org/problems/palindrome0746/1"
      },
      {
        "title": "Fibonacci number",
        "link": "https://www.geeksforgeeks.org/problems/nth-fibonacci-number1335/1"
      }
    ]
  },
  {
    "day": 22,
    "questions": [
      {
        "title": "Sum of digits",
        "link": "https://www.geeksforgeeks.org/problems/sum-of-digits1742/1"
      },
      {
        "title": "Anagram",
        "link": "https://www.geeksforgeeks.org/problems/anagram-1587115620/1"
      }
    ]
  },
  {
    "day": 23,
    "questions": [
      {
        "title": "Contains duplicate",
        "link": "https://leetcode.com/problems/contains-duplicate/description/"
      },
      {
        "title": "Valid anagram",
        "link": "https://leetcode.com/problems/valid-anagram/description/"
      }
    ]
  },
  {
    "day": 24,
    "questions": [
      {
        "title": "Length of last word",
        "link": "https://leetcode.com/problems/length-of-last-word/description/"
      },
      {
        "title": "Two Sum",
        "link": "https://leetcode.com/problems/two-sum/description/"
      }
    ]
  },
  {
    "day": 25,
    "questions": [
      {
        "title": "String matching in array",
        "link": "https://leetcode.com/problems/string-matching-in-an-array/description/"
      },
      {
        "title": "Leap year",
        "link": "https://www.geeksforgeeks.org/problems/leap-year0943/1"
      }
    ]
  },
  {
    "day": 26,
    "questions": [
      {
        "title": "Remove element",
        "link": "https://leetcode.com/problems/remove-element/"
      },
      {
        "title": "Majority element",
        "link": "https://leetcode.com/problems/majority-element/description/"
      }
    ]
  },
  {
    "day": 27,
    "questions": [
      {
        "title": "Next greater element",
        "link": "https://leetcode.com/problems/next-greater-element-i/description/"
      },
      {
        "title": "Missing and repeated values",
        "link": "https://leetcode.com/problems/find-missing-and-repeated-values/description/"
      }
    ]
  },
  {
    "day": 28,
    "questions": [
      {
        "title": "Monotonic array",
        "link": "https://leetcode.com/problems/monotonic-array/description/"
      },
      {
        "title": "Single number",
        "link": "https://leetcode.com/problems/single-number/description/"
      }
    ]
  },
  {
    "day": 29,
    "questions": [
      {
        "title": "Number of 1 bits",
        "link": "https://leetcode.com/problems/number-of-1-bits/description/"
      },
      {
        "title": "Minimum bit flip",
        "link": "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/description/"
      }
    ]
  },
  {
    "day": 30,
    "questions": [
      {
        "title": "Power of 2",
        "link": "https://leetcode.com/problems/power-of-two/description/"
      },
      {
        "title": "Missing number",
        "link": "https://leetcode.com/problems/missing-number/description/"
      },
      {
        "title": "Find position of set bit",
        "link": "https://www.geeksforgeeks.org/problems/find-position-of-set-bit3706/1"
      }
    ]
  }

]
};

// Initialize a batch (honors/courage)
function renderBatch(batchName) {
  const questions = data[batchName];
  const todaySet = questions.find((q) => q.day === dayDiff);
  const past = questions.filter((q) => q.day < dayDiff);

  // Set day count
  document.getElementById(`day-count-${batchName}`).textContent = Math.min(dayDiff, 60);

  // Populate today's questions
  const todayContainer = document.getElementById(`today-container-${batchName}`);
  todayContainer.innerHTML = "";
  if (todaySet) {
    todaySet.questions.forEach((q, i) => {
      const card = document.createElement("div");
      card.className = "question-card";
      card.innerHTML = `
        <h4>Question ${i + 1}: ${q.title}</h4>
        <a href="${q.link}" target="_blank">Solve →</a>
      `;
      todayContainer.appendChild(card);
    });
  } else {
    todayContainer.innerHTML = "<p>No questions added for today.</p>";
  }

  // Populate previous days
  const prevContainer = document.getElementById(`previous-days-${batchName}`);
  prevContainer.innerHTML = "";

  past.forEach((day) => {
    const block = document.createElement("div");
    block.className = "day-block";
    block.innerHTML = `<h4>Day ${day.day}</h4>`;

    const questionsWrapper = document.createElement("div");
    questionsWrapper.className = "day-questions";

    day.questions.forEach((q, i) => {
      const qEl = document.createElement("div");
      qEl.className = "question-card";
      qEl.innerHTML = `
        <h4>Question ${i + 1}: ${q.title}</h4>
        <div class="links">
          <a href="${q.link}" target="_blank">View →</a>
          ${q.video ? `<a href="${q.video}" target="_blank" class="yt-link"><img src="https://img.icons8.com/ios-filled/20/fa314a/youtube-play.png" alt="YT" class="yt-icon" /></a>` : ""}
        </div>
      `;
      questionsWrapper.appendChild(qEl);
    });

    block.appendChild(questionsWrapper);
    prevContainer.appendChild(block);
  });
}

// Tab switch logic
function switchTab(tabId) {
  document.querySelectorAll(".tab-button").forEach((btn) => btn.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach((tab) => tab.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");
  event.target.classList.add("active");
}

// Initialize both batches
renderBatch("honors");
renderBatch("courage");
