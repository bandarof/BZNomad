import { useState } from 'react';

interface TipsAndFAQsProps {
  tripType: string;
  hotelStars: string;
  carCategory: string;
  hasChildren: boolean;
  hasInfants: boolean;
  isSideTrip: boolean;
}

export default function TipsAndFAQs({ tripType, hotelStars, carCategory, hasChildren, hasInfants, isSideTrip }: TipsAndFAQsProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const getTips = () => {
    const tips: string[] = [];

    if (tripType === 'round-trip') {
      tips.push('✈️ Book round-trip flights in advance (2-3 months ahead) to get the best deals');
      tips.push('📅 Flexible date ranges can save you 15-30% on airfare');
    } else if (tripType === 'multi-city') {
      tips.push('🗺️ Multi-city itineraries are great for exploring multiple countries');
      tips.push('⏱️ Allow 2-3 days between city changes for travel and adjustment');
    }

    if (hotelStars !== 'none') {
      if (hotelStars === 'luxury' || hotelStars === '5') {
        tips.push('🏨 Luxury accommodations often have airport transfers - ask about this');
        tips.push('💎 Book luxury stays directly with the hotel for better rates than third-party sites');
      } else {
        tips.push('🏨 Read recent reviews from other nomads before booking');
        tips.push('🌐 Check for workspaces and WiFi speed ratings in hotel reviews');
      }
    }

    if (carCategory !== 'none') {
      tips.push('🚗 International driving permits are required in many countries');
      tips.push('💳 Get comprehensive travel insurance that covers rental vehicles');
      tips.push('⛽ Gas prices vary significantly by country - budget accordingly');
    }

    if (hasChildren) {
      tips.push('👶 Children under 12 require car seats in most countries');
      tips.push('🎫 Many attractions offer family discounts - ask for them');
    }

    if (hasInfants) {
      tips.push('👶 Check airline baggage policies for strollers and car seats');
      tips.push('🍼 Stock up on familiar baby food and formula before traveling');
    }

    return tips;
  };

  const getFAQs = () => {
    const faqs: Array<{ question: string; answer: string }> = [];

    faqs.push({
      question: 'How early should I book my flights?',
      answer: 'Domestic flights: 1-3 months ahead. International flights: 2-3 months ahead for best prices. Flight prices are typically lowest on Tuesdays and Wednesdays.'
    });

    if (tripType === 'round-trip' || tripType === 'multi-city') {
      faqs.push({
        question: 'What is the best strategy for flexible dates?',
        answer: 'Flexible travel dates can save you significant money. Being flexible across 2-3 week periods can yield 20-40% savings compared to fixed dates.'
      });
    }

    if (hotelStars !== 'none') {
      faqs.push({
        question: 'Should I book hotels in advance?',
        answer: 'For nomads, booking hotels 2-4 weeks in advance usually gives good rates. However, some luxury properties offer last-minute discounts. Always compare prices across multiple platforms.'
      });
    }

    if (carCategory !== 'none') {
      faqs.push({
        question: 'Do I need insurance for car rentals?',
        answer: 'Most car rental companies offer insurance, but it\'s often overpriced. Consider getting coverage through your travel insurance or credit card. Always carry an International Driving Permit.'
      });
    }

    faqs.push({
      question: 'What should I pack for a digital nomad trip?',
      answer: 'Pack light but include: universal power adapter, laptop & chargers, important documents, medications, and travel insurance documents. Consider luggage with TSA locks.'
    });

    faqs.push({
      question: 'How do I get travel insurance?',
      answer: 'ASAP Tickets partners with leading travel insurance providers. We can help you get comprehensive coverage that includes medical emergencies, trip cancellations, and lost luggage.'
    });

    if (hasChildren) {
      faqs.push({
        question: 'How do I travel with children?',
        answer: 'Plan shorter travel days, book family-friendly accommodations, and allow downtime. Many airlines offer family boarding and special assistance for children.'
      });
    }

    if (hasInfants) {
      faqs.push({
        question: 'What are airline policies for infants?',
        answer: 'Infants usually fly free on international flights if they sit on a parent\'s lap. Domestic flights may have different rules. Car seats and strollers often fly free as checked baggage.'
      });
    }

    return faqs;
  };

  const tips = getTips();
  const faqs = getFAQs();

  return (
    <div className="bg-dark-800/60 backdrop-blur rounded-2xl p-8 glow-border-lg">
      <h3 className="text-2xl font-bold text-gray-100 mb-6">Travel Tips & FAQs</h3>

      {tips.length > 0 && (
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-teal-300 mb-4">💡 Tips for Your Trip</h4>
          <div className="space-y-3">
            {tips.map((tip, index) => (
              <div key={index} className="flex gap-3 p-3 bg-dark-700/50 rounded-lg border border-dark-600 hover:border-teal-500/30 transition-colors">
                <div className="flex-shrink-0 text-lg leading-none">{tip.split(' ')[0]}</div>
                <p className="text-sm text-gray-300 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {faqs.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-teal-300 mb-4">❓ Frequently Asked Questions</h4>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-dark-600 rounded-lg overflow-hidden hover:border-teal-500/50 transition-colors">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-4 py-3 bg-dark-700/50 hover:bg-dark-700 text-left flex justify-between items-center transition-colors"
                >
                  <span className="font-medium text-gray-300 text-sm">{faq.question}</span>
                  <span className={`text-teal-400 transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {expandedFAQ === index && (
                  <div className="px-4 py-3 bg-dark-800/50 border-t border-dark-600">
                    <p className="text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 p-4 bg-teal-500/10 border border-teal-500/30 rounded-lg">
        <p className="text-sm text-teal-300 font-semibold mb-2">Need personalized help?</p>
        <p className="text-xs text-gray-400">Our travel experts at ASAP Tickets are here to help. We can assist with visa applications, travel insurance, and custom itineraries.</p>
      </div>
    </div>
  );
}
