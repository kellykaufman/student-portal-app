<template>
  <div>
    <h1>{{ student.first_name }} {{ student.last_name }}</h1>
    <h2>Experience:</h2>
    <div v-for="experience in experiences" :key="experience.id">
      <p>{{ experience }}</p>
    </div>
    <h2>Education:</h2>
    <div v-for="education in educations" :key="education.id">
      <p>{{ education }}</p>
    </div>
    <h2>Skills:</h2>
    <p>{{ skills }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      student: [
        {
          id: 1,
          first_name: "Jarret",
          last_name: "Nachtigal",
          email: "jn@example.com",
          phone_number: "123-456-789",
          short_bio: "Jarret is the best!",
          linkedin_url: "linkedin.com/in/jarret-nachtigal-42a849220",
          twitter_handle: "N/A",
          website_url: "https://github.com/JarretNachtigal",
          online_resume_url: "N/A",
          github_url: "https://github.com/JarretNachtigal",
          photo: "jarret.png",
        },
      ],
      experiences: [
        {
          id: 2,
          start_date: "12-12-12",
          end_date: "12-12-16",
          job_title: "President",
          company: "US Government",
          details:
            "Oversaw the entirety of the United States of America. It was a pretty easy task. No need to thank me, did it for the love of the sport.",
        },
        {
          id: 1,
          start_date: "12-12-09",
          end_date: "10-12-11",
          job_title: "Space Diver",
          company: "NASA",
          details:
            "Launched the entirety of the SS Apollo out of the gravitational force of the Earth's orbit. Viewed the Earth in ways that 99% will never get to experience.",
        },
      ],
      educations: [
        {
          id: 1,
          start_date: "01-01-00",
          end_date: "01-02-00",
          degree: "Cryptocurrency",
          university_name: "The University of Neptune",
          details:
            "Obtained PhD in cryptocurrency after obtaining a bachelors in Egyptology and interning with the CIA and Atlantis Turtle Academy.",
        },
      ],
      skills: ["X-ray vision", "Pickpocketing", "CSS", "Tomahawk Throwing", "Pyramid Scheming", "English"],
      capstones: {
        name: "Complete Automation",
        description:
          "Created a bot that automates all aspect of society so that you can sit at home and watch YouTube vidoes.",
        url: "reddit.com",
        screenshot: "actualize.png",
      },
      studentPostParams: {},
    };
  },
};
</script>
