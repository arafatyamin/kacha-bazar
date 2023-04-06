import OfferCard from './OfferCard';

const OfferPage = () => {
  return (
    <div className='mx-auto max-w-screen-2xl px-4 py-10 lg:py-20 sm:px-10'>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <OfferCard
        title="Card Title" 
        description="This is a card description. It can be as long or as short as you need it to be." 
        imageUrl="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=128&q=75" 
      />
      <OfferCard
        title="Card Title" 
        description="This is a card description. It can be as long or as short as you need it to be." 
        imageUrl="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FPDLPDHc%2Fins1.jpg&w=128&q=75" 
      />
      <OfferCard 
        title="Another Card Title" 
        description="This is another card description. It can be as long or as short as you need it to be." 
        imageUrl="https://images.immediate.co.uk/production/volatile/sites/30/2023/02/Bowl-of-fruit-5155e6f.jpg?quality=90&resize=768,574" 
      />
      <OfferCard 
        title="Another Card Title" 
        description="This is another card description. It can be as long or as short as you need it to be." 
        imageUrl="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F4thS4Z1%2Fins2.jpg&w=128&q=75" 
      />
    </div>
    </div>
  )
}
export default OfferPage;