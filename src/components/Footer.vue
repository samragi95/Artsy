<template>
<div>
    <article class="bg-orange-100  px-4 pt-8 py-8 mt-8  ">
          <h1 class="text-center text-4xl mb-4  "> What is Artsy?</h1>
          <h2 class="text-center text-sm underline hover:text-orange-400 cursor-pointer">Read Our wonderfully weird story</h2>
          <div class="flex mt-6 space-x-8 mx-36">
          <div>
            <h1 class="text-xl font-semibold md:text-2xl">A community doing good</h1>
            <p class="align-middle mt-4 md:text-xl text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cum, atque adipisci iure eum expedita blanditiis ipsum fuga iste quia non corporis doloribus accusantium ipsam sed quidem. Quibusdam vero, odit doloremque officia ab maiores saepe praesentium provident iusto velit quaerat adipisci eum aspernatur iure quisquam dignissimos repellat amet excepturi cum dicta accusamus? Nihil, molestiae!
            </p>
          </div>
          <div>
             <h1 class="text-xl font-semibold">A community doing good</h1>
            <p class="align-middle mt-4 text-justify ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cum, atque adipisci iure eum expedita blanditiis ipsum fuga iste quia non corporis doloribus accusantium ipsam sed quidem. Quibusdam vero, odit doloremque officia ab maiores saepe praesentium provident iusto velit quaerat adipisci eum aspernatur iure quisquam dignissimos repellat amet excepturi cum dicta accusamus? Nihil, molestiae!
            </p>
          </div>
           <div >
              <h1 class="text-xl font-semibold">A community doing good</h1>
            <p class="align-middle mt-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cum, atque adipisci iure eum expedita blanditiis ipsum fuga iste quia non corporis doloribus accusantium ipsam sed quidem. Quibusdam vero, odit doloremque officia ab maiores saepe praesentium provident iusto velit quaerat adipisci eum aspernatur iure quisquam dignissimos repellat amet excepturi cum dicta accusamus? Nihil, molestiae!
            </p>
           </div>
           </div>
           <div class=" flex flex-col justify-center items-center  space-x-4 ">
             <h1 class="text-lg font-semibold mt-8 ">Have a question? Well, we've got some answers</h1>
             <button class="mt-6 outline h-10 px-4  rounded-full hover:outline-2 ">Go to Help Center</button>
           </div>
          </article >
          
          <section class="bg-emerald-200 px-4 py-8 ">
            <div class="flex flex-col justify-center items-center">
              <p class="text-xl">Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling in Artsy.</p>
               <form @submit.prevent="Subscribed">
                 <input class="block border mt-4 border-black w-96 p-3 rounded-full mb-4" type="email" name="email"  placeholder="Enter your Email"/>
                 </form>
                <button class="outline w-28 rounded-full hover:bg-white ">Subscribe</button>
            </div>
          </section>

          <section class="bg-orange-100 px-4 py-8">
            <div class="flex mx-40 space-x-48">
              <div>
                <h1 class="font-bold">Shop</h1>
                <ul class="cursor-pointer">
                  <li class="hover:underline">Gift Cards</li>
                  <li class="hover:underline">Site Map</li>
                  <li class="hover:underline">Etsy Blog</li>
                </ul>
              </div>
              <div>
                <h1 class="font-bold">Sell</h1>
                <ul class="cursor-pointer">
                  <li class="hover:underline">Sell on Artsy</li>
                  <li class="hover:underline">Teams</li>
                  <li class="hover:underline">Forums</li>
                  <li class="hover:underline">Affiliates</li>
                </ul>
              </div>
              <div>
                <h1 class="font-bold">About</h1>
                <ul class="cursor-pointer">
                  <li class="hover:underline">Artsy, Inc.</li>
                  <li class="hover:underline">Policies</li>
                  <li class="hover:underline">Investors</li>
                  <li class="hover:underline">Careers</li>
                  <li class="hover:underline">Press</li>
                  <li class="hover:underline">Impact</li>
                  <li class="hover:underline">Legal imprint</li>
                </ul>
              </div>
              <div>
                <h1 class="font-bold">Help</h1>
                <ul class="cursor-pointer">
                  <li class="hover:underline">Help Center</li>
                  <li class="hover:underline">Trust and safety</li>
                  <li class="hover:underline">Privacy Settings</li>
                  <li class=" mt-7 outline w-48  text-center rounded-full">Download Artsy App</li>
                  <li class="space-x-4 mx-3  mt-4">
                      <font-awesome-icon :icon="['fab', 'twitter']" class=""/>
                      <font-awesome-icon :icon="['fab', 'facebook']" class=""/>
                      <font-awesome-icon :icon="['fab', 'github']" class=""/>
                      <font-awesome-icon :icon="['fab', 'instagram']" class=""/>
                  </li>
                </ul>
              </div>

            </div>
          </section>
</div>

</template>