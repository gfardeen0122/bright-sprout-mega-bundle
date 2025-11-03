<?php get_header(); ?>

<div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-12 md:py-20 bg-gradient-to-br from-green-50 to-purple-50">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Left Column -->
                <div class="space-y-6">
                    <div class="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                        <span class="text-sm font-semibold">🎉 Trusted by 5,000+ Parents</span>
                    </div>
                    
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        <?php echo get_theme_mod('hero_title', '10,000+ Fun Worksheets for Kids Aged 3–7'); ?>
                    </h1>
                    
                    <p class="text-lg text-gray-600">
                        <?php echo get_theme_mod('hero_subtitle', 'Help your child learn and grow with our complete collection of printable worksheets covering alphabets, numbers, shapes, colors, and more!'); ?>
                    </p>
                    
                    <div id="countdown-timer" class="font-semibold text-purple-600">
                        ⏰ Offer ends in <span id="timer">24:00:00</span>
                    </div>
                    
                    <a href="#pricing" class="btn btn-primary inline-flex items-center gap-2 text-lg smooth-scroll">
                        ✅ Get Lifetime Access @ ₹<?php echo get_theme_mod('price', '499'); ?> Now
                    </a>
                    
                    <p class="text-sm text-gray-600">
                        🔒 Instant access • Lifetime updates • No recurring fees
                    </p>
                    
                    <div class="flex items-center gap-2">
                        <div class="flex">
                            <?php for($i = 0; $i < 5; $i++): ?>
                                <span class="text-yellow-400">⭐</span>
                            <?php endfor; ?>
                        </div>
                        <span class="text-sm text-gray-600">4.9/5 from 2,000+ reviews</span>
                    </div>
                </div>
                
                <!-- Right Column -->
                <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-green-400 to-purple-400 rounded-3xl transform rotate-3"></div>
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hero-child.jpg" 
                         alt="Child learning with worksheets" 
                         class="relative rounded-3xl shadow-2xl w-full">
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    Everything Your Child Needs to <span class="bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">Excel in Learning</span>
                </h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    A complete learning package designed by educators for early childhood development
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <?php 
                $features = array(
                    array('icon' => '📚', 'title' => '10,000+ Worksheets', 'desc' => 'Comprehensive collection covering all early learning topics'),
                    array('icon' => '👥', 'title' => 'Age-Appropriate', 'desc' => 'Designed specifically for ages 3-7 years'),
                    array('icon' => '🖨️', 'title' => 'Print Unlimited', 'desc' => 'Print as many copies as you need'),
                    array('icon' => '🎯', 'title' => 'Skill-Based', 'desc' => 'Organized by learning objectives'),
                    array('icon' => '🎓', 'title' => 'Expert Designed', 'desc' => 'Created by experienced educators'),
                    array('icon' => '💻', 'title' => 'Instant Access', 'desc' => 'Download immediately after purchase'),
                    array('icon' => '❤️', 'title' => 'Kid-Friendly', 'desc' => 'Colorful and engaging designs'),
                    array('icon' => '🔄', 'title' => 'Lifetime Updates', 'desc' => 'Get new worksheets added regularly'),
                );
                
                foreach($features as $feature):
                ?>
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-100">
                    <div class="text-4xl mb-4"><?php echo $feature['icon']; ?></div>
                    <h3 class="font-bold text-lg mb-2"><?php echo $feature['title']; ?></h3>
                    <p class="text-sm text-gray-600"><?php echo $feature['desc']; ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16 md:py-24 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/parent-child-learning.jpg" 
                         alt="Parent and child learning together" 
                         class="rounded-2xl shadow-2xl">
                </div>
                <div class="space-y-6">
                    <h2 class="text-3xl md:text-4xl font-bold">
                        Why Parents <span class="bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">Love</span> Bright Sprout
                    </h2>
                    <p class="text-gray-600">
                        Our worksheets make learning fun and effective, helping your child build essential skills for school and beyond.
                    </p>
                    
                    <?php 
                    $benefits = array(
                        array('title' => 'Save Time & Money', 'desc' => 'No more searching for quality worksheets online'),
                        array('title' => 'Boost Confidence', 'desc' => 'Watch your child master new skills daily'),
                        array('title' => 'Screen-Free Learning', 'desc' => 'Healthy alternative to digital devices'),
                        array('title' => 'Parent-Child Bonding', 'desc' => 'Quality time spent learning together'),
                    );
                    
                    foreach($benefits as $benefit):
                    ?>
                    <div class="flex gap-4">
                        <div class="text-2xl">✨</div>
                        <div>
                            <h3 class="font-bold mb-1"><?php echo $benefit['title']; ?></h3>
                            <p class="text-sm text-gray-600"><?php echo $benefit['desc']; ?></p>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    What Parents Are <span class="bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">Saying</span>
                </h2>
                <p class="text-lg text-gray-600">
                    Join thousands of happy parents who've transformed their child's learning
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                <?php 
                $testimonials = array(
                    array('name' => 'Priya Sharma', 'location' => 'Mumbai', 'text' => 'My 5-year-old daughter loves these worksheets! She asks for them every day. Great quality and variety.', 'rating' => 5),
                    array('name' => 'Rahul Verma', 'location' => 'Delhi', 'text' => 'Best investment for my twins\' education. The worksheets are well-organized and age-appropriate.', 'rating' => 5),
                    array('name' => 'Anjali Patel', 'location' => 'Bangalore', 'text' => 'My son improved his writing skills significantly. Highly recommend to all parents!', 'rating' => 5),
                );
                
                foreach($testimonials as $testimonial):
                ?>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="flex mb-4">
                        <?php for($i = 0; $i < $testimonial['rating']; $i++): ?>
                            <span class="text-yellow-400">⭐</span>
                        <?php endfor; ?>
                    </div>
                    <p class="text-gray-700 mb-4">"<?php echo $testimonial['text']; ?>"</p>
                    <div>
                        <p class="font-bold"><?php echo $testimonial['name']; ?></p>
                        <p class="text-sm text-gray-600"><?php echo $testimonial['location']; ?></p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-16 md:py-24 bg-gradient-to-br from-green-50 to-purple-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    Frequently Asked <span class="bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
                </h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Got questions? We've got answers.
                </p>
            </div>

            <div class="max-w-3xl mx-auto space-y-4">
                <?php 
                $faqs = array(
                    array('q' => 'What age group is this bundle for?', 'a' => 'Suitable for kids aged 3–7 years — preschool, LKG, UKG, and early grades.'),
                    array('q' => 'Are these digital or physical worksheets?', 'a' => 'It\'s a digital download. You\'ll get instant access to printable PDFs after purchase.'),
                    array('q' => 'Can teachers use these in their classrooms?', 'a' => 'Absolutely! You\'ll get permission to print and use them for class activities.'),
                    array('q' => 'Will I get updates in the future?', 'a' => 'Yes! You\'ll receive free lifetime updates as we add new worksheets.'),
                    array('q' => 'What is the refund policy?', 'a' => 'If you face any access issue, a 100% refund will be provided.'),
                );
                
                foreach($faqs as $index => $faq):
                ?>
                <div class="faq-item bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm">
                    <button class="faq-question w-full text-left font-semibold flex justify-between items-center" onclick="toggleFaq(<?php echo $index; ?>)">
                        <?php echo $faq['q']; ?>
                        <span class="faq-icon text-2xl">+</span>
                    </button>
                    <div class="faq-answer hidden text-gray-600 mt-3 pt-3 border-t border-gray-100">
                        <?php echo $faq['a']; ?>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
                <div class="bg-white rounded-2xl shadow-2xl border-4 border-green-500 overflow-hidden">
                    <div class="bg-gradient-to-r from-green-600 to-purple-600 text-white text-center py-4">
                        <p class="font-bold text-lg">🎁 LIMITED TIME OFFER</p>
                    </div>
                    
                    <div class="p-8 md:p-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">
                            Bright Sprout Mega Bundle
                        </h2>
                        
                        <div class="text-center mb-8">
                            <div class="flex items-center justify-center gap-4 mb-4">
                                <span class="text-3xl text-gray-400 line-through">₹<?php echo get_theme_mod('original_price', '2,999'); ?></span>
                                <span class="text-5xl md:text-6xl font-bold text-green-600">₹<?php echo get_theme_mod('price', '499'); ?></span>
                            </div>
                            <p class="text-xl text-purple-600 font-semibold">Save 83% Today!</p>
                        </div>
                        
                        <div class="space-y-4 mb-8">
                            <?php 
                            $includes = array(
                                '10,000+ Premium Worksheets',
                                'All Future Updates FREE',
                                'Unlimited Printing Rights',
                                'Instant Digital Access',
                                'Money-Back Guarantee',
                            );
                            
                            foreach($includes as $include):
                            ?>
                            <div class="flex items-center gap-3">
                                <span class="text-green-600 text-xl">✅</span>
                                <span class="text-lg"><?php echo $include; ?></span>
                            </div>
                            <?php endforeach; ?>
                        </div>
                        
                        <a href="<?php echo esc_url(get_theme_mod('purchase_link', '#')); ?>" 
                           class="btn btn-primary w-full text-center block text-sm sm:text-base md:text-lg py-4 mb-6">
                            ✅ Get Lifetime Access @ ₹<?php echo get_theme_mod('price', '499'); ?> Now
                        </a>
                        
                        <div class="flex justify-center items-center gap-8 text-sm text-gray-600">
                            <div class="flex items-center gap-2">
                                <span>🔒</span>
                                <span>Secure Payment</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span>💯</span>
                                <span>100% Safe</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span>⚡</span>
                                <span>Instant Access</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Comparison Table -->
                <div class="mt-16">
                    <h3 class="text-2xl font-bold text-center mb-8">See How We Compare</h3>
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                        <table class="w-full">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-4 text-left">Feature</th>
                                    <th class="px-6 py-4 text-center">Other Packs</th>
                                    <th class="px-6 py-4 text-center bg-green-50">Bright Sprout</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <?php 
                                $comparisons = array(
                                    array('feature' => 'Number of Worksheets', 'other' => '500-1000', 'ours' => '10,000+'),
                                    array('feature' => 'Price', 'other' => '₹999-₹2999', 'ours' => '₹499'),
                                    array('feature' => 'Lifetime Updates', 'other' => '❌', 'ours' => '✅'),
                                    array('feature' => 'Print Unlimited', 'other' => '❌', 'ours' => '✅'),
                                    array('feature' => 'Expert Designed', 'other' => 'Sometimes', 'ours' => '✅'),
                                );
                                
                                foreach($comparisons as $comp):
                                ?>
                                <tr>
                                    <td class="px-6 py-4 font-medium"><?php echo $comp['feature']; ?></td>
                                    <td class="px-6 py-4 text-center text-gray-600"><?php echo $comp['other']; ?></td>
                                    <td class="px-6 py-4 text-center font-bold text-green-600 bg-green-50"><?php echo $comp['ours']; ?></td>
                                </tr>
                                <?php endforeach; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<!-- Sticky CTA -->
<div id="sticky-cta" class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg hidden">
    <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="text-center sm:text-left">
                <p class="font-bold text-lg">Limited Time: ₹<?php echo get_theme_mod('price', '499'); ?> Only!</p>
                <p class="text-sm text-gray-600">10,000+ Worksheets • Lifetime Access</p>
            </div>
            <a href="#pricing" class="btn btn-primary whitespace-nowrap smooth-scroll">
                ✅ Get Lifetime Access @ ₹<?php echo get_theme_mod('price', '499'); ?> Now
            </a>
        </div>
    </div>
</div>

<?php get_footer(); ?>
