import React from "react";
import { TbBrandFlutter, TbBrandKotlin, TbJetpack } from "react-icons/tb";
function AndroidDev() {
  return (
    <div className="py-[10rem] mx-10 md:mx-[2rem] text-white">
      <h1 className="text-[2rem] text-white text-center">
        Android Development
      </h1>
      <p className="text-lg mb-6 pt-16 text-justify">
        Embark on an exciting journey into the world of Android development! In
        this domain, you'll master the art of building applications for the
        world's most used mobile platform. From designing intuitive user
        interfaces to implementing powerful functionalities, Android development
        offers endless possibilities. Join us as we explore the Android
        ecosystem and equip you with the skills to create dynamic and
        user-friendly apps.
      </p>

      <h3 className="text-xl font-semibold mb-2">Tech Stacks</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <TbBrandKotlin className="inline-block mr-2 text-blue-500" />
          Kotlin: Kotlin is the new language that is used for development in
          Android. This is fully interoperated with Java, which means you can
          use Kotlin and Java code in one project. Nowadays, Kotlin is the most
          preferred language for Android projects and will continue to grow in
          popularity in 2023.
        </li>
        <li>
          <TbBrandFlutter className="inline-block mr-2 text-blue-500" />
          Flutter/Dart: It is used for the Flutter UI software development kit
          that Google created for cross-platform development. Flutter is used
          for developing different apps for Android, iOS, Linux, Windows, macOS,
          and Google Fuchsia platforms.
        </li>
        <li>
          <TbJetpack className="inline-block mr-2 text-blue-500" />
          Android Jetpack Compose: Jetpack Compose is the new UI library made by
          Google, which uses the declarative method to build native UI. Unlike
          the pre-built way used XML, Jetpack Compose can be declared right in
          the code.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Learning Resources</h3>
      <p className="mb-6">
        Here are some recommended resources to enhance your web development
        skills:
      </p>
      {/* list of learning resources here */}
      <h3 className="text-xl font-semibold mb-2">Events and Workshops</h3>
      <p className="mb-6">
        Join us in exciting web development events and workshops:
      </p>
      {/* list of events and workshops here */}

      <h3 className="text-xl font-semibold mb-2">Featured Projects</h3>
      <p className="mb-6">
        Check out some amazing projects created by our members:
      </p>
      {/* list of featured projects here */}
    </div>
  );
}

export default AndroidDev;
