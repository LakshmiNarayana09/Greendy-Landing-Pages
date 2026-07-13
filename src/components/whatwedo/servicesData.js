import designImage from "../../assets/whatwedo/design.png";
import googleAdsImage from "../../assets/whatwedo/google-ads.png";
import seoImage from "../../assets/whatwedo/seo.png";
import socialMediaImage from "../../assets/whatwedo/social-media.png";

import icon from "../../assets/whatwedo/icon.png";


const servicesData = [
  {
    id: 1,
    title: "Good Design Increases Sales",
    image: designImage,
    imageLeft: true,
    cards: [
      {
        id: 1,
        icon: icon,
        title: "Strategy and Research",
        description:
          "Based on deep researching we create the best strategy due to your needs.",
      },
      {
        id: 2,
        icon: icon,
        title: "Development",
        description:
          "We create the best solution helping our platform and readers standards.",
      },
      {
        id: 3,
        icon: icon,
        title: "Strategy & Visual design",
        description:
          "It is possible to see the future through the perspectives provided.",
      },
      {
        id: 4,
        icon: icon,
        title: "Conversion optimisation",
        description:
          "We identify your customer base to fit efficiently to your offers.",
      },
    ],
  },

  {
    id: 2,
    title: "Get More Customers with Google Ads",
    image: googleAdsImage,
    imageLeft: false,
    cards: [
      {
        id: 1,
        icon: icon,
        title: "Campaign development",
        description:
          "Create your unique advertising easily without extra time or money.",
      },
      {
        id: 2,
        icon: icon,
        title: "Campaign launch",
        description:
          "Start your campaigns with the most modern environment.",
      },
      {
        id: 3,
        icon: icon,
        title: "Optimization",
        description:
          "Save your money with the right keywords and proper optimization.",
      },
      {
        id: 4,
        icon: icon,
        title: "Measurement",
        description:
          "Discover the value visitors generate to optimize campaigns.",
      },
    ],
  },

  {
    id: 3,
    title: "Show Up when People Search for What You Sell",
    image: seoImage,
    imageLeft: true,
    cards: [
      {
        id: 1,
        icon: icon,
        title: "SEO audit",
        description:
          "Analyze your real needs and improve your website visibility.",
      },
      {
        id: 2,
        icon: icon,
        title: "On-page SEO",
        description:
          "Optimize every page on your website for search engines.",
      },
      {
        id: 3,
        icon: icon,
        title: "Targeted content",
        description:
          "The targeting method helps you publish relevant categories of posts.",
      },
      {
        id: 4,
        icon: icon,
        title: "Off-page SEO",
        description:
          "The strategy helps you increase the trust level for your online area.",
      },
    ],
  },

  {
    id: 4,
    title: "Grow Your Business with Social Media",
    image: socialMediaImage,
    imageLeft: false,
    cards: [
      {
        id: 1,
        icon: icon,
        title: "Advertising",
        description:
          "Tell your clients while they are online and increase your business.",
      },
      {
        id: 2,
        icon: icon,
        title: "Optimized ads",
        description:
          "Create unique and profitable ads that reach the right audience.",
      },
      {
        id: 3,
        icon: icon,
        title: "Community",
        description:
          "Develop strong social communities to achieve better results.",
      },
      {
        id: 4,
        icon: icon,
        title: "Following Growth",
        description:
          "Track social media trends and evaluate your business performance.",
      },
    ],
  },
];

export default servicesData;