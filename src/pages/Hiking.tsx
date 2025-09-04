import React from 'react';
import Layout from '@/components/Layout';
import MediaSlideshow from '@/components/MediaSlideshow';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Hiking = () => {
  // Media files from the hiking adventure
  const hikingMedia = [
    { src: '/john o groats.jpg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.32.jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.32 (1).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.33.jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.33 (1).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.33 (2).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.33 (3).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.33 (4).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.33 (5).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.33 (6).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.34.jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.34 (1).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.34 (2).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.34 (3).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.34 (4).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.34 (5).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.34 (6).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.34 (7).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.34 (8).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.35.jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.35 (1).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.35 (2).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.35 (3).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.35 (4).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.36.jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.36 (1).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.36 (2).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.36 (3).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.36 (4).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.36 (5).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.36 (6).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.36 (7).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.37.jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.37 (1).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.37 (2).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.37 (3).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.37 (4).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.37 (5).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Image 2025-09-03 at 17.02.37 (6).jpeg', type: 'image' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Video 2025-09-03 at 17.02.37.mp4', type: 'video' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Video 2025-09-03 at 17.02.38.mp4', type: 'video' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Video 2025-09-03 at 17.02.38 (1).mp4', type: 'video' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Video 2025-09-03 at 17.02.39.mp4', type: 'video' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Video 2025-09-03 at 17.02.41.mp4', type: 'video' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Video 2025-09-03 at 17.02.42.mp4', type: 'video' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Video 2025-09-03 at 17.02.45.mp4', type: 'video' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Video 2025-09-03 at 17.02.46.mp4', type: 'video' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Video 2025-09-03 at 17.02.49.mp4', type: 'video' as const },
    { src: '/WhatsApp Unknown 2025-09-03 at 17.04.00/WhatsApp Video 2025-09-03 at 17.02.50.mp4', type: 'video' as const },
    { src: '/lands end.jpg', type: 'image' as const },
  ];

  return (
    <Layout>
      <div className="p-6 mx-0 max-w-7xl">
        <h1 className="text-2xl font-bold mb-6">Adventures</h1>
        
        {/* Main content with dropdown accordions */}
        <Accordion type="multiple" className="w-full space-y-2">
            
            {/* Hiking the length of Britain */}
            <AccordionItem value="hiking-britain" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline hover:bg-gray-100/50 dark:hover:bg-gray-700/50 rounded-t-lg [&[data-state=open]]:rounded-b-none">
                Hiking the length of Britain: John O'Groats to Land's End
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="font-medium mb-3">In the Summer of 2025, I hiked the length of Britain from John O'Groats to Land's End, over 10 weeks.</h3>
                      <p className="mb-3 leading-tight">
                        <strong>Distance:</strong> 1800km over 10 weeks
                      </p>
                      <p className="mb-3 leading-tight">
                        <strong>Gear:</strong> Complete gear list with weights and details available on my{' '}
                        <a 
                          href="https://lighterpack.com/r/dcahco" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Lighterpack 
                        </a>
                        .
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3">Route Map</h3>
                      <img 
                        src="/route-map.png" 
                        alt="Hiking route map from John O'Groats to Land's End"
                        className="w-full rounded border border-border"
                      />
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3">Detailed Route</h3>
                      <p className="mb-3 leading-tight">
                        <strong>Scotland:</strong> Started at John O'Groats and walked to Inverness, then continued 
                        to Fort William via the Great Glen Way. From Fort William, I followed the West Highland Way to Drymen.
                      </p>
                      <p className="mb-3 leading-tight">
                        <strong>The Borders & Pennine Way:</strong> From Drymen, I walked through the Scottish Borders 
                        to reach Byrness Village, where I joined the famous Pennine Way. I then followed the entire 
                        Pennine Way from Byrness to Edale.
                      </p>
                      <p className="mb-3 leading-tight">
                        <strong>Central England:</strong> From Edale, I walked through the southern Peak District and 
                        the Midlands to reach Knighton, then followed Offa's Dyke Path to Bristol, my home.
                      </p>
                      <p className="mb-3 leading-tight">
                        <strong>Southwest England:</strong> From Bristol, I walked through the Somerset countryside, 
                        over the Quantock Hills and through Exmoor National Park to Barnstaple. Finally, I followed 
                        the South West Coast Path from Barnstaple all the way to Land's End.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3">Thoughts</h3>
                      <p className="mb-3 leading-tight">
                        This hike taught me that the hardest part of any long journey is simply starting. 
                        Once you're walking, the miles take care of themselves.
                      </p>
                      <p className="mb-3 leading-tight">
                        The British countryside is more diverse than I imagined - from the rugged Scottish 
                        Highlands to the gentle rolling hills of the Cotswolds. Each day brought new 
                        landscapes and new challenges.
                      </p>
                      <p className="leading-tight">
                        Most importantly, I learned that 1800km is just a number. What matters is putting 
                        one foot in front of the other, day after day, until you reach your destination.
                      </p>
                    </div>
                  </div>

                  {/* Photo slideshow */}
                  <div className="lg:col-span-1">
                    <div className="sticky top-6">
                      <h3 className="text-lg font-semibold mb-4">Highlights, in chronological order</h3>
                      <MediaSlideshow mediaItems={hikingMedia} className="w-full" />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Cycling Europe */}
            <AccordionItem value="cycling-europe" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline hover:bg-gray-100/50 dark:hover:bg-gray-700/50 rounded-t-lg [&[data-state=open]]:rounded-b-none">
                Cycling Europe: 1200km to Munich for SaveSoil
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Summer 2024</p>
                    <p className="mb-3 leading-tight">
                      While not strictly hiking, my 1200km cycle across Europe to Munich for SaveSoil 
                      demonstrated my love for long-distance adventures and pushing physical limits.
                    </p>
                    <p className="mb-3 leading-tight">
                      <strong>Distance:</strong> 1200km across multiple European countries
                    </p>
                    <p className="mb-3 leading-tight">
                      <strong>Purpose:</strong> Raising awareness and funds for soil conservation through the SaveSoil movement
                    </p>
                    <p className="mb-3 leading-tight">
                      <strong>Impact:</strong> Raised £1500 and reached over 50,000 people through social media and local newspaper coverage
                    </p>
                    <p className="leading-tight">
                      This journey combined my passion for adventure with environmental advocacy, proving that 
                      physical challenges can be powerful platforms for positive change.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
        </Accordion>
      </div>
    </Layout>
  );
};

export default Hiking;


