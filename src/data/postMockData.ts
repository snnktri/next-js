  import type { PostType } from "@/type/resources/post.type";
  
  export const posts: PostType[] = [
    {
      id: "1",
      user: {
        name: "John Doe",
        profile: "/post/profile1.png",
        title: "Mathematics Teacher at Global Higher Secondary School",
      },
      content: "📢 Wanted to share this job vacancy. Hope it’s helpful !!",
      image: "/post/content1.png",
      likes: 14,
      comments: 12,
      reposts: 4,
      timestamp: "2025-06-24T12:00:00Z",
    },
    {
      id: "2",
      user: {
        name: "Samantha James",
        profile: "/post/profile3.png",
        title: "Co-ordinator at Nepal Higher Secondary School",
      },
      content: `📢 Vacancy Announcement !!
We are looking for a passionate and dedicated Science Teacher to join our academic team.
📍 Location: Kathmandu
🏫 School: Sunrise Model School
🕒 Grade Level: 6–8
🗓️ Apply by: June 10, 2025
👉 Interested candidates can apply with their updated profile.
#Hiring #ScienceTeacher #TeachingJobs #Kathmandu`,
      image: "",
      likes: 14,
      comments: 12,
      reposts: 4,
      timestamp: "2025-06-24T12:00:00Z",
    },
    {
      id: "3",
      user: {
        name: "Global College of Science",
        profile: "/post/profile3.png",
        title: "+2 College, Old-Baneshwor, Kathmandu",
      },
      content: `📢 Watch this video. Hope it’s helpful !!`,
      image: "/post/content2.png",
      likes: 14,
      comments: 12,
      reposts: 4,
      timestamp: "2025-06-24T12:00:00Z",
    },
    {
      id: "4",
      user: {
        name: "John Doe",
        profile: "/post/profile4.png",
        title: "Mathematics Teacher at Global Higher Secondary School",
      },
      content: "📢 Wanted to share this job vacancy. Hope it’s helpful !!",
      image: "/post/content3.png",
      likes: 14,
      comments: 12,
      reposts: 4,
      timestamp: "2025-06-24T12:00:00Z",
    },
  ];

  
  export const userPosts: PostType[] = [
    {
      id: "1",
      user: {
        name: "John Doe",
        profile: "/post/profile1.png",
        title: "Mathematics Teacher at Global Higher Secondary School",
      },
      content: "📢 Wanted to share this job vacancy. Hope it’s helpful !!",
      image: "/post/content1.png",
      likes: 14,
      comments: 12,
      reposts: 4,
      timestamp: "2025-06-24T12:00:00Z",
      isMine: true,
      isRepost: false
    },
    {
      id: "2",
      user: {
        name: "John Doe",
        profile: "/post/profile1.png",
        title: "Mathematics Teacher at Global Higher Secondary School",
      },
      content: `📢 Vacancy Announcement !!
We are looking for a passionate and dedicated Science Teacher to join our academic team.
📍 Location: Kathmandu
🏫 School: Sunrise Model School
🕒 Grade Level: 6–8
🗓️ Apply by: June 10, 2025
👉 Interested candidates can apply with their updated profile.
#Hiring #ScienceTeacher #TeachingJobs #Kathmandu`,
      image: "",
      likes: 14,
      comments: 12,
      reposts: 4,
      timestamp: "2025-06-24T12:00:00Z",
      isMine: true,
      isRepost: false
    },
    {
      id: "3",
       user: {
        name: "John Doe",
        profile: "/post/profile1.png",
        title: "Mathematics Teacher at Global Higher Secondary School",
      },
      content: `📢 Watch this video. Hope it’s helpful !!`,
      image: "/post/content2.png",
      likes: 14,
      comments: 12,
      reposts: 4,
      timestamp: "2025-06-24T12:00:00Z",
      isMine: true,
      isRepost: false
    },
    {
      id: "4",
      user: {
        name: "John Doe",
        profile: "/post/profile4.png",
        title: "Mathematics Teacher at Global Higher Secondary School",
      },
      content: "📢 Wanted to share this job vacancy. Hope it’s helpful !!",
      image: "/post/content3.png",
      likes: 14,
      comments: 12,
      reposts: 4,
      timestamp: "2025-06-24T12:00:00Z",
      isMine: true,
      isRepost: true
    },
  ];


   export const collegePosts: PostType[] = [
    {
      id: "1",
      user: {
        name: "Samantha James",
        profile: "/post/profile3.png",
        title: "Co-ordinator at Nepal Higher Secondary School",
      },
      content: "📢 Wanted to share this job vacancy. Hope it’s helpful !!",
      image: "/post/content1.png",
      likes: 14,
      comments: 12,
      reposts: 4,
      timestamp: "2025-06-24T12:00:00Z",
      isMine: true,
      isRepost: false
    },
    {
      id: "2",
     user: {
        name: "Samantha James",
        profile: "/post/profile3.png",
        title: "Co-ordinator at Nepal Higher Secondary School",
      },
      content: `📢 Vacancy Announcement !!
We are looking for a passionate and dedicated Science Teacher to join our academic team.
📍 Location: Kathmandu
🏫 School: Sunrise Model School
🕒 Grade Level: 6–8
🗓️ Apply by: June 10, 2025
👉 Interested candidates can apply with their updated profile.
#Hiring #ScienceTeacher #TeachingJobs #Kathmandu`,
      image: "",
      likes: 14,
      comments: 12,
      reposts: 4,
      timestamp: "2025-06-24T12:00:00Z",
      isMine: true,
      isRepost: false
    },
    {
      id: "3",
      user: {
        name: "Samantha James",
        profile: "/post/profile3.png",
        title: "Co-ordinator at Nepal Higher Secondary School",
      },
      content: `📢 Watch this video. Hope it’s helpful !!`,
      image: "/post/content2.png",
      likes: 14,
      comments: 12,
      reposts: 4,
      timestamp: "2025-06-24T12:00:00Z",
      isMine: true,
      isRepost: false
    },
    {
      id: "4",
      user: {
        name: "John Doe",
        profile: "/post/profile4.png",
        title: "Mathematics Teacher at Global Higher Secondary School",
      },
      content: "📢 Wanted to share this job vacancy. Hope it’s helpful !!",
      image: "/post/content3.png",
      likes: 14,
      comments: 12,
      reposts: 4,
      timestamp: "2025-06-24T12:00:00Z",
      isMine: true,
      isRepost: true
    },
  ];