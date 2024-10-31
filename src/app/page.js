import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen  flex flex-col items-center justify-center">
      {/* بخش تصویر */}
      <div className="bg-white p-4 rounded-lg overflow-hidden shadow-lg  max-w-3xl">
        <Image
          src="/images/woman.jpg"
          width="400"
          height="300"
          alt="Profile"
          className="w-full object-cover"
        />
        {/* متن اصلی */}
        <dive className="p-8  text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            How can I help you?
          </h1>
          <p className="text-gray-600 mb-8">
            As a freelance digital designer, I am here to make you stand out in
            the digital world. The combination of my passion for design and your
            vision will ensure a great result.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold text-blue-500">DESIGN</h3>
              <ul className="text-gray-700">
                <li>Web Design</li>
                <li>Prototyping</li>
                <li>Branding</li>
                <li>Illustration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-500">
                DEVELOPMENT
              </h3>
              <ul className="text-gray-700">
                <li>Web Development</li>
                <li>Marketing</li>
                <li>Outsource</li>
              </ul>
            </div>
          </div>
        </dive>
      </div>
    </div>
  );
}
