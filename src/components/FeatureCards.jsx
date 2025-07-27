import { FaHandFist, FaKeyboard, FaChartLine } from 'react-icons/fa6';

const features = [
  {
    title: 'Sign Language Detection',
    description: "Recognizes all 26 ASL alphabets along with 10 custom word signs using your webcam. The detection runs smoothly in real-time, powered by MediaPipe's hand tracking technology.",
    icon: <FaHandFist className="text-cyan-400 text-4xl" />,
  },
  {
    title: 'Learn Fingerspelling',
    description: 'Type any word and the app shows how to spell it using ASL fingerspelling. Great for learning and practice.',
    icon: <FaKeyboard className="text-cyan-400 text-4xl" />,
  },
  {
    title: '80%+ Model Accuracy',
    description: 'The sign detection model gives over 80% accuracy across different lighting and hand types. Reliable enough for real-world use.',
    icon: <FaChartLine className="text-cyan-400 text-4xl" />,
  },
];
const FeatureCards = () => {
  return (
    <div className="px-6 pb-30 text-white">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 max-w-md mx-auto rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-xl hover:bg-gray-800 transition duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;