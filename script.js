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
        },
        {
          title: "Squares of a Sorted Array",
          link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
        },
      ],
    },
    {
      day: 2,
      questions: [
        {
          title: "Maximum Subarray (Kadane's Algorithm)",
          link: "https://leetcode.com/problems/maximum-subarray/",
        },
        {
          title: "Maximum Product Subarray",
          link: "https://leetcode.com/problems/maximum-product-subarray/",
        },
      ],
    },
    {
      day: 3,
      questions: [
        {
          title: "Majority Element",
          link: "https://leetcode.com/problems/majority-element/",
        },
        {
          title: "Majority Element II",
          link: "https://leetcode.com/problems/majority-element-ii/",
        },
      ],
    },
    {
      day: 4,
      questions: [
        {
          title: "Next Greater Element III",
          link: "https://leetcode.com/problems/next-greater-element-iii/",
        },
        {
          title: "Max Chunks To Make Sorted",
          link: "https://leetcode.com/problems/max-chunks-to-make-sorted/",
        },
      ],
    },
    {
      day: 5,
      questions: [
        {
          title: "Max Chunks To Make Sorted II",
          link: "https://leetcode.com/problems/max-chunks-to-make-sorted-ii/",
        },
        {
          title: "Number of Subarrays with Bounded Maximum",
          link: "https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/",
        },
      ],
    },
    {
      day: 6,
      questions: [
        {
          title: "First Missing Positive",
          link: "https://leetcode.com/problems/first-missing-positive/",
        },
        {
          title: "Range Addition",
          link: "https://www.lintcode.com/problem/range-addition/description",
        },
      ],
    },
    {
      day: 7,
      questions: [
        {
          title: "Minimum Number of Platforms",
          link: "https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/",
        },
        {
          title: "Trapping Rain Water",
          link: "https://leetcode.com/problems/trapping-rain-water/",
        },
      ],
    },
    {
      day: 8,
      questions: [
        {
          title: "Container With Most Water",
          link: "https://leetcode.com/problems/container-with-most-water/",
        },
        {
          title: "Two Sum",
          link: "https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/",
        },
      ],
    },
    {
      day: 9,
      questions: [
        {
          title: "Find a Pair with the Given Difference",
          link: "https://www.geeksforgeeks.org/find-a-pair-with-the-given-difference/",
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
      day: 14,
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
      day: 15,
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
      day: 16,
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
      day: 17,
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
      day: 18,
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
      day: 19,
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
      day: 20,
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
      day: 21,
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
      day: 22,
      questions: [
        {
          title: "Capacity To Ship Packages Within D Days",
          link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
        },
        {
          title: "Painter's Partition Problem",
          link: "https://www.interviewbit.com/problems/painters-partition-problem/#",
        },
      ],
    },
    {
      day: 23,
      questions: [
        {
          title: "Search in Rotated Sorted Array",
          link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        },
        {
          title: "Search in Rotated Sorted Array II",
          link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
        },
      ],
    },
    {
      day: 24,
      questions: [
        {
          title: "Allocate Books",
          link: "https://www.interviewbit.com/problems/allocate-books/",
        },
        {
          title: "Median of Two Sorted Arrays",
          link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        },
      ],
    },
    {
      day: 25,
      questions: [
        {
          title: "Reverse Linked List",
          link: "https://leetcode.com/problems/reverse-linked-list/",
        },
        {
          title: "Find the Middle of the Linked List",
          link: "https://www.geeksforgeeks.org/write-a-c-function-to-print-the-middle-of-the-linked-list/",
        },
      ],
    },
    {
      day: 26,
      questions: [
        {
          title: "Detect Loop in a Linked List",
          link: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/",
        },
        {
          title: "Clone a Linked List with Next and Random Pointer",
          link: "https://www.geeksforgeeks.org/a-linked-list-with-next-and-arbit-pointer/",
        },
      ],
    },
    {
      day: 27,
      questions: [
        {
          title: "Intersection Point of Two Linked Lists",
          link: "https://www.geeksforgeeks.org/write-a-function-to-get-the-intersection-point-of-two-linked-lists/",
        },
        {
          title: "LRU Cache",
          link: "https://leetcode.com/problems/lru-cache/",
        },
      ],
    },
    {
      day: 28,
      questions: [
        {
          title: "Next Greater Element",
          link: "https://leetcode.com/problems/next-greater-element-i/",
        },
        {
          title: "Largest Rectangular Area Histogram",
          link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        },
      ],
    },
    {
      day: 29,
      questions: [
        {
          title: "Maximum Size Binary Matrix Containing 1",
          link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        },
        {
          title: "Valid Parentheses",
          link: "https://leetcode.com/problems/valid-parentheses/",
        },
      ],
    },
    {
      day: 30,
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
      day: 31,
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
      day: 32,
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
        { title: "FizzBuzz", link: "https://leetcode.com/problems/fizz-buzz/" },
        {
          title: "Palindrome Number",
          link: "https://leetcode.com/problems/palindrome-number/",
        },
      ],
    },
    {
      day: 2,
      questions: [
        {
          title: "Maximum Subarray",
          link: "https://leetcode.com/problems/maximum-subarray/",
        },
        {
          title: "Best Time to Buy and Sell Stock",
          link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        },
      ],
    },
  ],
};

// Initialize a batch (honors/courage)
function renderBatch(batchName) {
  const questions = data[batchName];
  const todaySet = questions.find((q) => q.day === dayDiff);
  const past = questions.filter((q) => q.day < dayDiff);

  // Set day count
  document.getElementById(`day-count-${batchName}`).textContent = Math.min(
    dayDiff,
    60
  );

  // Populate today's questions
  const todayContainer = document.getElementById(
    `today-container-${batchName}`
  );
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
        <a href="${q.link}" target="_blank">View →</a>
      `;
      questionsWrapper.appendChild(qEl);
    });

    block.appendChild(questionsWrapper);
    prevContainer.appendChild(block);
  });
}

// Tab switch logic
function switchTab(tabId) {
  document
    .querySelectorAll(".tab-button")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((tab) => tab.classList.add("hidden"));

  document.getElementById(tabId).classList.remove("hidden");
  event.target.classList.add("active");
}

// Initialize both batches on load
renderBatch("honors");
renderBatch("courage");
