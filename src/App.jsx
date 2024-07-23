import Login from "./components/login";
import "./App.css";
import ProfileCard from "./components/profile";
function App() {
  const dummyProfiles = [
    {
      name: "Jane Smith",
      location: "Kigali",
      biotxt:
        "Passionate about technology and innovation, Jane loves to explore new trends and ideas in the tech world. She is an avid reader and enjoys coding in her free time.",
      age: 25,
    },
    {
      name: "Michael Johnson",
      location: "Butare",
      biotxt:
        "Michael is a seasoned software developer with over a decade of experience. He specializes in web development and is a strong advocate for open-source projects.",
      age: 32,
    },
    {
      name: "Emily Davis",
      location: "Gisenyi",
      biotxt:
        "With a background in graphic design, Emily brings a creative flair to every project she works on. She enjoys photography and creating digital art.",
      age: 17,
    },
    {
      name: "Christopher Brown",
      location: "Muhanga",
      biotxt:
        "Christopher is a data scientist who loves diving into large datasets to uncover hidden insights. He is also a fan of machine learning and artificial intelligence.",
      age: 45,
    },
    {
      name: "Patricia Wilson",
      location: "Musanze",
      biotxt:
        "An experienced project manager, Patricia excels at coordinating teams and ensuring projects are delivered on time and within budget. She enjoys hiking and outdoor activities.",
      age: 28,
    },
    {
      name: "Daniel Martinez",
      location: "Nyagatare",
      biotxt:
        "Daniel is a cybersecurity expert with a focus on network security. He spends his free time keeping up with the latest security trends and practices ethical hacking.",
      age: 16,
    },
    {
      name: "Linda Garcia",
      location: "Huye",
      biotxt:
        "Linda is a software engineer with a passion for developing mobile applications. She enjoys learning new programming languages and contributing to community projects.",
      age: 21,
    },
    {
      name: "David Martinez",
      location: "Kibuye",
      biotxt:
        "David is a cloud computing specialist who helps businesses transition to cloud-based infrastructures. He enjoys playing chess and solving complex puzzles.",
      age: 33,
    },
    {
      name: "Sarah Lee",
      location: "Rubavu",
      biotxt:
        "Sarah is a digital marketer with expertise in SEO and social media strategy. She loves crafting content that engages audiences and drives brand growth.",
      age: 17,
    },
    {
      name: "James White",
      location: "Kayonza",
      biotxt:
        "James is an IT consultant who provides solutions for businesses looking to optimize their tech operations. In his spare time, he volunteers at local coding bootcamps.",
      age: 29,
    },
  ];

  return (
    <div>
      <p className="font-bold underline text-4xl"></p>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
        {dummyProfiles.map((profile, index) =>
          <ProfileCard key={index} profileInfo={profile} />
        )
        }
      </div> */}

      <div className="min-h-screen flex items-center">
        <Login />
      </div>
    </div>
  );
}

export default App;
