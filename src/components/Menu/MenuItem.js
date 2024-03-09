export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-black/25  hover:shadow-md transition-all">
      <div className="text-center ">
        <img className="max-h-auto max-h-24 block mx-auto" src="/pizza.png" alt="pizza" />
      </div>
      <h4 className="font-semibold my-3 text-xl">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <button className="bg-primary text-white rounded-full px-8 py-2 mt-4 ">
        Add to cart
      </button>
    </div>
  );
}
