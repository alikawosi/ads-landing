
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Users, Calendar, BookOpen, Share2, Trophy } from 'lucide-react';
import CTASection from '@/components/ui/cta-section';

const Community = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950 dark:to-blue-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center mb-6">
              <Badge className="bg-blue-500 text-white text-sm px-3 py-1">Coming Soon</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Join the AutoAI Community
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Connect with dealership professionals, share ideas, and stay on top of the latest industry trends.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" radius="lg" variant="default" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Join Waitlist
                </Link>
              </Button>
              <Button size="lg" radius="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              What to Expect from Our Community
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our community platform is currently in development. Here's what you can look forward to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Discussion Forums</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Engage in meaningful conversations about industry challenges, best practices, and innovative solutions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Networking Opportunities</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with peers in the automotive industry, build relationships, and explore collaboration opportunities.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Virtual Events</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Participate in webinars, workshops, and virtual conferences focused on automotive technology and innovation.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Resource Library</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access exclusive guides, case studies, and educational materials to enhance your dealership operations.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                <Share2 className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Knowledge Sharing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Share your experiences and learn from others' successes and challenges in implementing AI solutions.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Recognition Program</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get recognized for your contributions and achievements within the community and the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  Our Community Vision
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  We're building more than just a forum—we're creating a thriving ecosystem where automotive professionals can grow together, innovate, and shape the future of the industry.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Our community will be a space for continuous learning, meaningful connections, and collaborative problem-solving. Whether you're facing challenges with inventory management, customer experience, or digital transformation, you'll find support and guidance here.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Join us in building a community that drives innovation and excellence in the automotive industry.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Community Launch Timeline</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full mr-4">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Q2 2025</h4>
                      <p className="text-gray-600 dark:text-gray-400">Platform development and initial beta testing</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full mr-4">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Q3 2025</h4>
                      <p className="text-gray-600 dark:text-gray-400">Invitation-only early access phase</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full mr-4">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Q4 2025</h4>
                      <p className="text-gray-600 dark:text-gray-400">Community launch with initial forums and resources</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full mr-4">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Q1 2026</h4>
                      <p className="text-gray-600 dark:text-gray-400">Full feature rollout including events and recognition program</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Be Part of Our Growing Community"
        subtitle="Join the waitlist to be notified when our community launches and get early access."
        ctaText="Join Waitlist"
        ctaLink="/contact"
        backgroundClass="bg-indigo-600"
      />
    </Layout>
  );
};

export default Community;
