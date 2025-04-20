import Image from 'next/image'
import mainImg from '@/public/homepage.png'

const LandingPage = () => {
  return (
    <main className="min-h-screen font-sans text-[#4e341e]">
      {/* Hero Section */}
      <section className="relative grid min-h-screen grid-cols-8 items-center overflow-hidden">
        <Image
          src={mainImg}
          alt="Gluten Free Food"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none"
          quality={100}
          fill
          priority
          draggable="false"
        />
        <div className="z-10 col-span-3 col-start-5 px-6 md:px-0">
          <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">
            GLUTEN <br /> FREE <br /> FOOD
          </h1>
          <p className="mt-6 text-xl sm:text-2xl md:text-3xl">
            On our way to take care for your plate. We organized every healthy & gluten-free choice, 
            you just need to decide <span className="font-bold">WHAT DO YOU WANT.</span>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#f8f5f2] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide handpicked, delicious, and certified gluten-free meals that make healthy eating effortless and tasty.
          </p>
          <div className="mt-12 grid gap-12 sm:grid-cols-2 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#4e341e] py-20 text-white">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Join us today and discover the best gluten-free options tailored to your lifestyle.
          </p>
          <button className="rounded-full bg-white text-[#4e341e] px-8 py-3 font-semibold hover:bg-gray-100 transition">
            Sign Up Now
          </button>
        </div>
      </section>
    </main>
  )
}

const features = [
  { title: 'Certified Gluten-Free', description: 'All our meals are rigorously tested and certified gluten-free.' },
  { title: 'Chef-Curated Recipes', description: 'Every dish is created by professional chefs focused on taste and health.' },
  { title: 'Fast & Fresh Delivery', description: 'Get meals delivered fast and fresh, straight to your doorstep.' },
  { title: 'Flexible Meal Plans', description: 'Weekly, bi-weekly, or on-demand — choose what works for you.' },
  { title: '100% Organic Ingredients', description: 'We use only organic, high-quality ingredients in every dish.' },
  { title: 'Community Support', description: 'Join a community of gluten-free foodies and wellness seekers.' },
]

export default LandingPage
