import "cypress-localstorage-commands";
import data from "../../submissionData.json";
// let data = [
//   {
//     submission_link: "http://localhost:8080",
//     id: 67890,
//     json_server_link: "http://127.0.0.1:9090/",
//   },
// ];

let matchesData = [
  {
    id: 1,
    image: "/images/teamsLogo/csk.jfif",
    name: "Chennai Super Kings",
    captain: "M. S. Dhoni",
    price: 55000,
  },
  {
    id: 2,
    image: "/images/teamsLogo/DC.png",
    name: "Delhi Capitals",
    captain: "David Warner",
    price: 13000,
  },
  {
    id: 3,
    image: "/images/teamsLogo/GT.png",
    name: "Gujarat Titans",
    captain: "Hardik Pandya",
    price: 7000,
  },
  {
    id: 4,
    image: "/images/teamsLogo/kkr.jfif",
    name: "Kolkata Knight Riders",
    captain: "Nitish Rana",
    price: 16200,
  },
  {
    id: 5,
    image: "/images/teamsLogo/LSG.jfif",
    name: "Lucknow Super Giants",
    captain: "KL Rahul",
    price: 25000,
  },
  {
    id: 6,
    image: "/images/teamsLogo/MI.jfif",
    name: "Mumbai Indians",
    captain: "Rohit Sharma",
    price: 32000,
  },
  {
    id: 7,
    image: "/images/teamsLogo/PK.png",
    name: "Punjab Kings",
    captain: "Shikhar Dhawan",
    price: 17000,
  },
  {
    id: 8,
    image: "/images/teamsLogo/RR.png",
    name: "Rajasthan Royals",
    captain: "Sanju Samson",
    price: 2450,
  },
  {
    id: 9,
    image: "/images/teamsLogo/RCB.jfif",
    name: "Royal Challengers Bangalore",
    captain: "Faf du Plessis",
    price: 46000,
  },
  {
    id: 10,
    image: "/images/teamsLogo/SH.jfif",
    name: "Sunrisers Hyderabad",
    captain: "Aiden Markram",
    price: 5000,
  },
];

let recipeData = [
  {
    id: "52768",
    name: "Apple Frangipan Tart",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, crème fraiche or ice cream.",
    image: "/images/meals/wxywrq1468235067.jpg",
    tags: [1, 2, 3],
    youtube: "https://www.youtube.com/watch?v=rp8Slv4INLk",
    ingredients: [
      {
        ingredientId: "112",
        ingredientMeasure: "175g/6oz",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "75g/3oz",
      },
      {
        ingredientId: "33",
        ingredientMeasure: "200g/7oz",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "75g/3oz",
      },
      {
        ingredientId: "141",
        ingredientMeasure: "2",
      },
      {
        ingredientId: "169",
        ingredientMeasure: "75g/3oz",
      },
      {
        ingredientId: "550",
        ingredientMeasure: "1 tsp",
      },
      {
        ingredientId: "135",
        ingredientMeasure: "50g/1¾oz",
      },
    ],
    recipeSource: null,
    imageSource: null,
    price: "256.00",
    stock: 1,
    discount: 7,
    createdAt: 1667963546805,
  },
  {
    id: "52893",
    name: "Apple & Blackberry Crumble",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "Heat oven to 190C/170C fan/gas 5. Tip the flour and sugar into a large bowl. Add the butter, then rub into the flour using your fingertips to make a light breadcrumb texture. Do not overwork it or the crumble will become heavy. Sprinkle the mixture evenly over a baking sheet and bake for 15 mins or until lightly coloured.\r\nMeanwhile, for the compote, peel, core and cut the apples into 2cm dice. Put the butter and sugar in a medium saucepan and melt together over a medium heat. Cook for 3 mins until the mixture turns to a light caramel. Stir in the apples and cook for 3 mins. Add the blackberries and cinnamon, and cook for 3 mins more. Cover, remove from the heat, then leave for 2-3 mins to continue cooking in the warmth of the pan.\r\nTo serve, spoon the warm fruit into an ovenproof gratin dish, top with the crumble mix, then reheat in the oven for 5-10 mins. Serve with vanilla ice cream.",
    image: "/images/meals/xvsurr1511719182.jpg",
    tags: [4],
    youtube: "https://www.youtube.com/watch?v=4vhcOwVBDO4",
    ingredients: [
      {
        ingredientId: "248",
        ingredientMeasure: "120g",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "60g",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "60g",
      },
      {
        ingredientId: "464",
        ingredientMeasure: "300g",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "30g",
      },
      {
        ingredientId: "110",
        ingredientMeasure: "30g",
      },
      {
        ingredientId: "84",
        ingredientMeasure: "¼ teaspoon",
      },
      {
        ingredientId: "181",
        ingredientMeasure: "to serve",
      },
    ],
    recipeSource:
      "https://www.bbcgoodfood.com/recipes/778642/apple-and-blackberry-crumble",
    imageSource: null,
    price: "464.00",
    stock: 2,
    discount: 3,
    createdAt: 1667963546805,
  },
  {
    id: "53049",
    name: "Apam balik",
    recipeCategoryId: "3",
    areaId: 15,
    instructions:
      "Mix milk, oil and egg together. Sift flour, baking powder and salt into the mixture. Stir well until all ingredients are combined evenly.\r\n\r\nSpread some batter onto the pan. Spread a thin layer of batter to the side of the pan. Cover the pan for 30-60 seconds until small air bubbles appear.\r\n\r\nAdd butter, cream corn, crushed peanuts and sugar onto the pancake. Fold the pancake into half once the bottom surface is browned.\r\n\r\nCut into wedges and best eaten when it is warm.",
    image: "/images/meals/adxcbq1619787919.jpg",
    tags: [],
    youtube: "https://www.youtube.com/watch?v=6R8ffRRJcrg",
    ingredients: [
      {
        ingredientId: "211",
        ingredientMeasure: "200ml",
      },
      {
        ingredientId: "223",
        ingredientMeasure: "60ml",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "2",
      },
      {
        ingredientId: "137",
        ingredientMeasure: "1600g",
      },
      {
        ingredientId: "15",
        ingredientMeasure: "3 tsp",
      },
      {
        ingredientId: "281",
        ingredientMeasure: "1/2 tsp",
      },
      {
        ingredientId: "491",
        ingredientMeasure: "25g",
      },
      {
        ingredientId: "305",
        ingredientMeasure: "45g",
      },
      {
        ingredientId: "238",
        ingredientMeasure: "3 tbs",
      },
    ],
    recipeSource:
      "https://www.nyonyacooking.com/recipes/apam-balik~SJ5WuvsDf9WQ",
    imageSource: null,
    price: "113.00",
    stock: 1,
    discount: 13,
    createdAt: 1667963546805,
  },
  {
    id: "52767",
    name: "Bakewell tart",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "To make the pastry, measure the flour into a bowl and rub in the butter with your fingertips until the mixture resembles fine breadcrumbs. Add the water, mixing to form a soft dough.\r\nRoll out the dough on a lightly floured work surface and use to line a 20cm/8in flan tin. Leave in the fridge to chill for 30 minutes.\r\nPreheat the oven to 200C/400F/Gas 6 (180C fan).\r\nLine the pastry case with foil and fill with baking beans. Bake blind for about 15 minutes, then remove the beans and foil and cook for a further five minutes to dry out the base.\r\nFor the filing, spread the base of the flan generously with raspberry jam.\r\nMelt the butter in a pan, take off the heat and then stir in the sugar. Add ground almonds, egg and almond extract. Pour into the flan tin and sprinkle over the flaked almonds.\r\nBake for about 35 minutes. If the almonds seem to be browning too quickly, cover the tart loosely with foil to prevent them burning.",
    image: "/images/meals/wyrqqq1468233628.jpg",
    tags: [1, 2, 5],
    youtube: "https://www.youtube.com/watch?v=1ahpSTf_Pvk",
    ingredients: [
      {
        ingredientId: "248",
        ingredientMeasure: "175g/6oz",
      },
      {
        ingredientId: "73",
        ingredientMeasure: "75g/2½oz",
      },
      {
        ingredientId: "93",
        ingredientMeasure: "2-3 tbsp",
      },
      {
        ingredientId: "256",
        ingredientMeasure: "1 tbsp",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "125g/4½oz",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "125g/4½oz",
      },
      {
        ingredientId: "169",
        ingredientMeasure: "125g/4½oz",
      },
      {
        ingredientId: "140",
        ingredientMeasure: "1",
      },
      {
        ingredientId: "550",
        ingredientMeasure: "½ tsp",
      },
      {
        ingredientId: "135",
        ingredientMeasure: "50g/1¾oz",
      },
    ],
    recipeSource: null,
    imageSource: null,
    price: "479.00",
    stock: 4,
    discount: 5,
    createdAt: 1667963546805,
  },
  {
    id: "52792",
    name: "Bread and Butter Pudding",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "Grease a 1 litre/2 pint pie dish with butter.\r\nCut the crusts off the bread. Spread each slice with on one side with butter, then cut into triangles.\r\nArrange a layer of bread, buttered-side up, in the bottom of the dish, then add a layer of sultanas. Sprinkle with a little cinnamon, then repeat the layers of bread and sultanas, sprinkling with cinnamon, until you have used up all of the bread. Finish with a layer of bread, then set aside.\r\nGently warm the milk and cream in a pan over a low heat to scalding point. Don't let it boil.\r\nCrack the eggs into a bowl, add three quarters of the sugar and lightly whisk until pale.\r\nAdd the warm milk and cream mixture and stir well, then strain the custard into a bowl.\r\nPour the custard over the prepared bread layers and sprinkle with nutmeg and the remaining sugar and leave to stand for 30 minutes.\r\nPreheat the oven to 180C/355F/Gas 4.\r\nPlace the dish into the oven and bake for 30-40 minutes, or until the custard has set and the top is golden-brown.",
    image: "/images/meals/xqwwpy1483908697.jpg",
    tags: [4, 6],
    youtube: "https://www.youtube.com/watch?v=Vz5W1-BmOE4",
    ingredients: [
      {
        ingredientId: "41",
        ingredientMeasure: "25g/1oz",
      },
      {
        ingredientId: "35",
        ingredientMeasure: "8 thin slices",
      },
      {
        ingredientId: "306",
        ingredientMeasure: "50g/2oz",
      },
      {
        ingredientId: "84",
        ingredientMeasure: "2 tsp",
      },
      {
        ingredientId: "211",
        ingredientMeasure: "350ml/12fl",
      },
      {
        ingredientId: "115",
        ingredientMeasure: "50ml/2fl oz",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "2 free-range",
      },
      {
        ingredientId: "305",
        ingredientMeasure: "25g/1oz",
      },
      {
        ingredientId: "222",
        ingredientMeasure: "grated, to taste",
      },
    ],
    recipeSource: "https://cooking.nytimes.com/recipes/1018529-coq-au-vin",
    imageSource: null,
    price: "270.00",
    stock: 7,
    discount: 13,
    createdAt: 1667963546805,
  },
  {
    id: "52807",
    name: "Baingan Bharta",
    recipeCategoryId: "12",
    areaId: 9,
    instructions:
      "Rinse the baingan (eggplant or aubergine) in water. Pat dry with a kitchen napkin. Apply some oil all over and\r\nkeep it for roasting on an open flame. You can also grill the baingan or roast in the oven. But then you won't get\r\nthe smoky flavor of the baingan. Keep the eggplant turning after a 2 to 3 minutes on the flame, so that its evenly\r\ncooked. You could also embed some garlic cloves in the baingan and then roast it.\r\n2. Roast the aubergine till its completely cooked and tender. With a knife check the doneness. The knife should slid\r\neasily in aubergines without any resistance. Remove the baingan and immerse in a bowl of water till it cools\r\ndown.\r\n3. You can also do the dhungar technique of infusing charcoal smoky flavor in the baingan. This is an optional step.\r\nUse natural charcoal for this method. Heat a small piece of charcoal on flame till it becomes smoking hot and red.\r\n4. Make small cuts on the baingan with a knife. Place the red hot charcoal in the same plate where the roasted\r\naubergine is kept. Add a few drops of oil on the charcoal. The charcoal would begin to smoke.\r\n5. As soon as smoke begins to release from the charcoal, cover the entire plate tightly with a large bowl. Allow the\r\ncharcoal smoke to get infused for 1 to 2 minutes. The more you do, the more smoky the baingan bharta will\r\nbecome. I just keep for a minute. Alternatively, you can also do this dhungar method once the baingan bharta is\r\ncooked, just like the way we do for Dal Tadka.\r\n6. Peel the skin from the roasted and smoked eggplant.\r\n7. Chop the cooked eggplant finely or you can even mash it.\r\n8. In a kadai or pan, heat oil. Then add finely chopped onions and garlic.\r\n9. Saute the onions till translucent. Don't brown them.\r\n10. Add chopped green chilies and saute for a minute.\r\n11. Add the chopped tomatoes and mix it well.\r\n12. Bhuno (saute) the tomatoes till the oil starts separating from the mixture.\r\n13. Now add the red chili powder. Stir and mix well.\r\n14. Add the chopped cooked baingan.\r\n15. Stir and mix the chopped baingan very well with the onion­tomato masala mixture.\r\n16. Season with salt. Stir and saute for some more 4 to 5 minutes more.\r\n17. Finally stir in the coriander leaves with the baingan bharta or garnish it with them. Serve Baingan Bharta with\r\nphulkas, rotis or chapatis. It goes well even with bread, toasted or grilled bread and plain rice or jeera rice.",
    image: "/images/meals/urtpqw1487341253.jpg",
    tags: [9, 10, 11],
    youtube: "https://www.youtube.com/watch?v=-84Zz2EP4h4",
    ingredients: [
      {
        ingredientId: "11",
        ingredientMeasure: "1 large",
      },
      {
        ingredientId: "364",
        ingredientMeasure: "½ cup ",
      },
      {
        ingredientId: "317",
        ingredientMeasure: "1 cup",
      },
      {
        ingredientId: "149",
        ingredientMeasure: "6 cloves",
      },
      {
        ingredientId: "223",
        ingredientMeasure: "1.5 tablespoon",
      },
      {
        ingredientId: "96",
        ingredientMeasure: "1 tablespoon chopped",
      },
      {
        ingredientId: "281",
        ingredientMeasure: "as required",
      },
    ],
    recipeSource:
      "http://www.vegrecipesofindia.com/baingan-bharta-recipe-punjabi-baingan-bharta-recipe/",
    imageSource: null,
    price: "230.00",
    stock: 6,
    discount: 19,
    createdAt: 1667963546805,
  },
  {
    id: "52855",
    name: "Banana Pancakes",
    recipeCategoryId: "3",
    areaId: 1,
    instructions:
      "In a bowl, mash the banana with a fork until it resembles a thick purée. Stir in the eggs, baking powder and vanilla.\r\nHeat a large non-stick frying pan or pancake pan over a medium heat and brush with half the oil. Using half the batter, spoon two pancakes into the pan, cook for 1-2 mins each side, then tip onto a plate. Repeat the process with the remaining oil and batter. Top the pancakes with the pecans and raspberries.",
    image: "/images/meals/sywswr1511383814.jpg",
    tags: [13, 14, 15],
    youtube: "https://www.youtube.com/watch?v=kSKtb2Sv-_U",
    ingredients: [
      {
        ingredientId: "407",
        ingredientMeasure: "1 large",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "2 medium",
      },
      {
        ingredientId: "15",
        ingredientMeasure: "pinch",
      },
      {
        ingredientId: "324",
        ingredientMeasure: "spinkling",
      },
      {
        ingredientId: "223",
        ingredientMeasure: "1 tsp ",
      },
      {
        ingredientId: "411",
        ingredientMeasure: "25g",
      },
      {
        ingredientId: "408",
        ingredientMeasure: "125g",
      },
    ],
    recipeSource: "https://www.bbcgoodfood.com/recipes/banana-pancakes",
    imageSource: null,
    price: "233.00",
    stock: 19,
    discount: 2,
    createdAt: 1667963546805,
  },
  {
    id: "52891",
    name: "Blackberry Fool",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "For the biscuits, preheat the oven to 200C/180C (fan)/Gas 6 and line two large baking trays with baking parchment. Scatter the nuts over a baking tray and roast in the oven for 6-8 minutes, or until golden-brown. Watch them carefully so that they don’t have a chance to burn. Remove from the oven, tip onto a board and leave to cool.\r\nPut the butter and sugar in a large bowl and beat with a wooden spoon until light and creamy. Roughly chop the cooled nuts and add to the creamed butter and sugar, along with the lemon zest, flour and baking powder. Stir well until the mixture comes together and forms a ball – you may need to use your hands.\r\nDivide the biscuit dough into 24 even pieces and roll into small balls. Place the balls the prepared baking trays, spaced well apart to allow for spreading.\r\nPress the biscuits to flatten to around 1cm/½in thick. Bake the biscuits, one tray at a time, for 12 minutes or until very pale golden-brown. Leave to cool on the trays. They will be very soft when you take them out of the oven, but will crisp as they cool.\r\nStore in an airtight tin and eat within five days.\r\nFor the fool, rinse the blackberries in a colander to wash away any dust or dirt. Put the blackberries in a non-stick saucepan and sprinkle over the caster sugar.\r\nStir in the lemon juice and heat gently for two minutes, or until the blackberries begin to soften and release their juices. Remove and reserve 12 blackberries for decoration and continue cooking the rest.\r\nSimmer the blackberries very gently for 15 minutes, stirring regularly until very soft and squidgy. Remove from the heat and press the berries and juice through a sieve over a bowl, using the bottom of a ladle to help you extract as much of the purée as possible. Leave the purée to cool and discard the seeds. You should end up with around 325ml/11fl oz of purée.\r\nPut the cream and yoghurt in a large bowl and whip with an electric whisk until soft peaks form when the whisk is removed from the bowl – the acidity of the fruit will thicken the cream further, so don’t take it too far.\r\nWhen the purée is completely cold, adjust the sweetness to taste by adding more sugar if needed. Pour it into the bowl with the whipped cream and yoghurt and stir just once or twice until very lightly combined.\r\nSpoon the blackberry fool into individual wide, glass dishes – or one large, single bowl. It should look quite marbled, so don’t over-stir it. Scatter a few tiny mint leaves on top and decorate with the reserved blackberries. Sprinkle with a little sugar if you like and serve with the hazelnut biscuits.",
    image: "/images/meals/rpvptu1511641092.jpg",
    tags: [14, 17, 3, 18],
    youtube: "https://www.youtube.com/watch?v=kniRGjDLFrQ",
    ingredients: [
      {
        ingredientId: "463",
        ingredientMeasure: "50g",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "125g",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "150g",
      },
      {
        ingredientId: "197",
        ingredientMeasure: "Grated",
      },
      {
        ingredientId: "248",
        ingredientMeasure: "150g",
      },
      {
        ingredientId: "15",
        ingredientMeasure: "½ tsp",
      },
      {
        ingredientId: "305",
        ingredientMeasure: "75g",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "2 tbs",
      },
      {
        ingredientId: "198",
        ingredientMeasure: "1 tbs",
      },
      {
        ingredientId: "115",
        ingredientMeasure: "300ml ",
      },
      {
        ingredientId: "343",
        ingredientMeasure: "100ml",
      },
      {
        ingredientId: "214",
        ingredientMeasure: "Garnish with",
      },
    ],
    recipeSource:
      "https://www.bbc.co.uk/food/recipes/blackberry_fool_with_11859",
    imageSource: null,
    price: "431.00",
    stock: 12,
    discount: 13,
    createdAt: 1667963546805,
  },
  {
    id: "52894",
    name: "Battenberg Cake",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "Heat oven to 180C/160C fan/gas 4 and line the base and sides of a 20cm square tin with baking parchment (the easiest way is to cross 2 x 20cm-long strips over the base). To make the almond sponge, put the butter, sugar, flour, ground almonds, baking powder, eggs, vanilla and almond extract in a large bowl. Beat with an electric whisk until the mix comes together smoothly. Scrape into the tin, spreading to the corners, and bake for 25-30 mins – when you poke in a skewer, it should come out clean. Cool in the tin for 10 mins, then transfer to a wire rack to finish cooling while you make the second sponge.\r\nFor the pink sponge, line the tin as above. Mix all the ingredients together as above, but don’t add the almond extract. Fold in some pink food colouring. Then scrape it all into the tin and bake as before. Cool.\r\nTo assemble, heat the jam in a small pan until runny, then sieve. Barely trim two opposite edges from the almond sponge, then well trim a third edge. Roughly measure the height of the sponge, then cutting from the well-trimmed edge, use a ruler to help you cut 4 slices each the same width as the sponge height. Discard or nibble leftover sponge. Repeat with pink cake.\r\nTake 2 x almond slices and 2 x pink slices and trim so they are all the same length. Roll out one marzipan block on a surface lightly dusted with icing sugar to just over 20cm wide, then keep rolling lengthways until the marzipan is roughly 0.5cm thick. Brush with apricot jam, then lay a pink and an almond slice side by side at one end of the marzipan, brushing jam in between to stick sponges, and leaving 4cm clear marzipan at the end. Brush more jam on top of the sponges, then sandwich remaining 2 slices on top, alternating colours to give a checkerboard effect. Trim the marzipan to the length of the cakes.\r\nCarefully lift up the marzipan and smooth over the cake with your hands, but leave a small marzipan fold along the bottom edge before you stick it to the first side. Trim opposite side to match size of fold, then crimp edges using fingers and thumb (or, more simply, press with prongs of fork). If you like, mark the 10 slices using the prongs of a fork.\r\nAssemble second Battenberg and keep in an airtight box or well wrapped in cling film for up to 3 days. Can be frozen for up to a month.",
    image: "/images/meals/ywwrsp1511720277.jpg",
    tags: [19, 15],
    youtube: "https://www.youtube.com/watch?v=aB41Q7kDZQ0",
    ingredients: [
      {
        ingredientId: "41",
        ingredientMeasure: "175g",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "175g",
      },
      {
        ingredientId: "286",
        ingredientMeasure: "140g",
      },
      {
        ingredientId: "471",
        ingredientMeasure: "50g",
      },
      {
        ingredientId: "15",
        ingredientMeasure: "½ tsp",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "3 Medium",
      },
      {
        ingredientId: "324",
        ingredientMeasure: "½ tsp",
      },
      {
        ingredientId: "550",
        ingredientMeasure: "¼ teaspoon",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "175g",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "175g",
      },
      {
        ingredientId: "286",
        ingredientMeasure: "140g",
      },
      {
        ingredientId: "471",
        ingredientMeasure: "50g",
      },
      {
        ingredientId: "15",
        ingredientMeasure: "½ tsp",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "3 Medium",
      },
      {
        ingredientId: "324",
        ingredientMeasure: "½ tsp",
      },
      {
        ingredientId: "550",
        ingredientMeasure: "¼ teaspoon",
      },
      {
        ingredientId: "466",
        ingredientMeasure: "½ tsp",
      },
      {
        ingredientId: "382",
        ingredientMeasure: "200g",
      },
      {
        ingredientId: "470",
        ingredientMeasure: "1kg",
      },
      {
        ingredientId: "347",
        ingredientMeasure: "Dusting",
      },
    ],
    recipeSource: "https://www.bbcgoodfood.com/recipes/1120657/battenberg-cake",
    imageSource: null,
    price: "167.00",
    stock: 19,
    discount: 18,
    createdAt: 1667963546805,
  },
  {
    id: "52928",
    name: "BeaverTails",
    recipeCategoryId: "3",
    areaId: 3,
    instructions:
      "In the bowl of a stand mixer, add warm water, a big pinch of sugar and yeast. Allow to sit until frothy.\r\nInto the same bowl, add 1/2 cup sugar, warm milk, melted butter, eggs and salt, and whisk until combined.\r\nPlace a dough hook on the mixer, add the flour with the machine on, until a smooth but slightly sticky dough forms.\r\nPlace dough in a bowl, cover with plastic wrap, and allow to proof for 1 1/2 hours.\r\nCut dough into 12 pieces, and roll out into long oval-like shapes about 1/4 inch thick that resemble a beaver’s tail.\r\nIn a large, deep pot, heat oil to 350 degrees. Gently place beavertail dough into hot oil and cook for 30 to 45 seconds on each side until golden brown.\r\nDrain on paper towels, and garnish as desired. Toss in cinnamon sugar, in white sugar with a squeeze of lemon, or with a generous slathering of Nutella and a handful of toasted almonds. Enjoy!",
    image: "/images/meals/ryppsv1511815505.jpg",
    tags: [21, 4, 22],
    youtube: "https://www.youtube.com/watch?v=2G07UOqU2e8",
    ingredients: [
      {
        ingredientId: "333",
        ingredientMeasure: "1/2 cup ",
      },
      {
        ingredientId: "475",
        ingredientMeasure: "2 parts ",
      },
      {
        ingredientId: "305",
        ingredientMeasure: "1/2 cup ",
      },
      {
        ingredientId: "211",
        ingredientMeasure: "1/2 cup ",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "6 tblsp",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "2",
      },
      {
        ingredientId: "281",
        ingredientMeasure: "1 ½ tsp",
      },
      {
        ingredientId: "137",
        ingredientMeasure: "2-1/2 cups",
      },
      {
        ingredientId: "223",
        ingredientMeasure: "for frying",
      },
      {
        ingredientId: "197",
        ingredientMeasure: "garnish",
      },
      {
        ingredientId: "305",
        ingredientMeasure: "garnish",
      },
      {
        ingredientId: "84",
        ingredientMeasure: "garnish",
      },
    ],
    recipeSource: "https://www.tastemade.com/videos/beavertails",
    imageSource: null,
    price: "276.00",
    stock: 5,
    discount: 17,
    createdAt: 1667963546805,
  }
];

let employeesData = [
  {
    id: 1,
    name: "Abram Langtry",
    image: "/images/avatar/avatar1.jpeg",
    department: 1,
    salary: "500",
  },
  {
    id: 2,
    name: "Flossy Arrell",
    image: "/images/avatar/avatar1.jpeg",
    department: 2,
    salary: 20000,
  },
  {
    id: 3,
    name: "Giorgio Antonioni",
    image: "/images/avatar/avatar1.jpeg",
    department: 3,
    salary: 95000,
  },
  {
    name: "Himanshu",
    image: "/images/avatar/avatar2.jpeg",
    department: 4,
    salary: 100000,
    createdAt: 1670325954162,
    id: "tEYFrHNsdO",
  },
  {
    name: "Prashant",
    image: "/images/avatar/avatar2.jpeg",
    department: 3,
    salary: 5000000,
    createdAt: 1670325954162,
    id: "yjkyh1htCb",
  },
  {
    name: "Rushikesh",
    image: "/images/avatar/avatar1.jpeg",
    department: 3,
    salary: 3000000,
    createdAt: 1672901861637,
    id: "fh2BHnLqlU",
  },
  {
    id: "4FjVtmfUYz",
    name: "Anand Kumar",
    image: "/images/avatar/avatar2.jpeg",
    salary: "1000000",
  },
  {
    name: "Ajay Singh",
    image: "/images/avatar/avatar1.jpeg",
    department: "2",
    salary: "8",
    createdAt: 1672913508984,
    id: "y1i4lO11Wk",
  },
  {
    id: "g5qs2OrO86",
    name: "Kumar Vishwas",
    department: "4",
    salary: "55555",
    createdAt: 1672919913274,
    image: "/images/avatar/avatar1.jpeg",
  },
];

/// <reference types="cypress" />
// let baseServerURL = Cypress.env("serverUrl");
data.map(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("Test", () => {
    let acc_score = 1;

    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });

    it("Shows the correct initial data", () => {
      cy.visit(url);

      let numOfMatches = matchesData.length;
      cy.log(numOfMatches + " cats found in the server");
      // console.log(numOfMatches);

      const cards = ".data-list-wrapper .card-list .card";

      cy.get(cards)
        .should("have.length", numOfMatches)
        .first()
        .should("contain", matchesData[0].name);

      cy.get(cards)
        .eq(Math.ceil(numOfMatches / 2))
        .should("contain", matchesData[Math.ceil(numOfMatches / 2)].name);

      cy.get(cards)
        .last()
        .should("contain", matchesData[numOfMatches - 1].name);

      cy.then(() => {
        acc_score += 2;
      });
    }); // 2

    it("Sorts as expected", () => {
      const cards = ".data-list-wrapper .card-list .card";

      cy.get("#sort-low-to-high").click();
      cy.wait(500);

      let arr = [];
      cy.get(cards)
        .each(($el, index, $list) => {
          arr.push(+$el.find(".card-price").text());
        })
        .then(() => {
          // console.log(arr, arr.length);
          const isSorted = arr.reduce(
            (n, item) => n !== false && item >= n && item
          );
          expect(!!isSorted).to.be.true;
          expect(arr.length).to.be.greaterThan(0);
        });

      cy.get("#sort-high-to-low").click();
      cy.wait(500);

      let arr2 = [];
      cy.get(cards)
        .each(($el, index, $list) => {
          arr2.push(+$el.find(".card-price").text());
        })
        .then(() => {
          //console.log(arr2, arr2.length);
          const isSorted = arr2.reduce(
            (n, item) => n !== false && item <= n && item
          );
          expect(!!isSorted).to.be.true;
          expect(arr2.length).to.be.greaterThan(0);
        });

      cy.then(() => {
        acc_score += 1;
      });
    }); // 1

    it("Filters as expected", () => {
      const Cards = ".data-list-wrapper .card-list .card";
      cy.wait(500);
      cy.get("#filter-Less-Than-20thousand").click();
      cy.wait(500);

      let arr = [];
      cy.get(Cards)
        .each(($el, index, $list) => {
          let currency = $el.find(".card-price").text();

          arr.push(Number(currency));
        })
        .then(() => {
          let ans = true;
          // console.log(typeof(arr[0]) ,arr);
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 20000) {
              ans = false;
            }
          }

          expect(ans).to.be.true;
          expect(arr.length).to.be.greaterThan(0);
        });

      cy.get("#filter-More-Than-20thousand").click();
      cy.wait(500);

      let arr2 = [];
      cy.get(Cards)
        .each(($el, index, $list) => {
          let currency = $el.find(".card-price").text();

          arr2.push(Number(currency));
        })
        .then(() => {
          let ans = true;
          for (let i = 0; i < arr2.length; i++) {
            if (arr2[i] < 20000) {
              ans = false;
            }
          }
          expect(ans).to.be.true;
          expect(arr2.length).to.be.greaterThan(0);
        });

      cy.then(() => {
        acc_score += 1;
      });
    }); // 1

    it("Booking tickets initial message", () => {
      cy.visit(url);

      cy.get("#ticket-book-card").should(
        "contain",
        `BOOKING STATUS : NOT booked yet!`
      );

      cy.then(() => {
        acc_score += 1;
      });
    }); // 1

    it("Booking tickets message on click of Book Now link", () => {
      cy.visit(url);
      let numOfMatches = matchesData.length;
      cy.log(numOfMatches + " employees found in the server");

      const cards = ".data-list-wrapper .card-list .card";

      cy.get(cards)
        .first()
        .find("a.card-link")
        .click()
        .then(() => {
          cy.get("#ticket-book-card").should(
            "contain",
            `Ticket Booking for : ${matchesData[0].name}!`
          );
        });

      cy.get(cards)
        .eq(Math.ceil(numOfMatches / 2))
        .find("a.card-link")
        .click()
        .then(() => {
          cy.get("#ticket-book-card").should(
            "contain",
            `Ticket Booking for : ${
              matchesData[Math.ceil(numOfMatches / 2)].name
            }!`
          );
        });

      cy.get(cards)
        .last()
        .find("a.card-link")
        .click()
        .then(() => {
          cy.get("#ticket-book-card").should(
            "contain",
            `Ticket Booking for : ${matchesData[numOfMatches - 1].name}!`
          );
        });

      cy.then(() => {
        acc_score += 3;
      });
    }); // 3

    it("cancel ticket button working as expected", () => {
      cy.visit(url);
      let numOfMatches = matchesData.length;
      cy.log(numOfMatches + " employees found in the server");

      const cards = ".data-list-wrapper .card-list .card";

      cy.get(cards)
        .first()
        .find("a.card-link")
        .click()
        .then(() => {
          cy.get("#ticket-book-card").should(
            "contain",
            `Ticket Booking for : ${matchesData[0].name}!`
          );
        });

      cy.get("#cancel-ticket").click();

      cy.get("#ticket-book-card").should(
        "contain",
        `BOOKING STATUS : NOT booked yet!`
      );
      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it("fetches and displays recipes", () => {
      let numOfRecipes = recipeData.length;
      cy.log(numOfRecipes + " recipes found in the server");

      cy.get("#fetch-recipes").click();
      cy.wait(500);

      const cards = ".data-list-wrapper .card-list .card";

      cy.get(cards)
        .should("have.length", numOfRecipes)
        .first()
        .should("contain", recipeData[0].name)
        .find(".card-description")
        .should("contain", recipeData[0].price);

      cy.get(cards)
        .eq(Math.ceil(numOfRecipes / 2))
        .should("contain", recipeData[Math.ceil(numOfRecipes / 2)].name)
        .find(".card-description")
        .should("contain", recipeData[Math.ceil(numOfRecipes / 2)].price);

      cy.get(cards)
        .last()
        .should("contain", recipeData[numOfRecipes - 1].name)
        .find(".card-description")
        .should("contain", recipeData[numOfRecipes - 1].price);

      cy.then(() => {
        acc_score += 1;
      });
    }); // 1

    it("fetches and displays employees", () => {
      let numOfEmployees = employeesData.length;
      cy.log(numOfEmployees + " employees found in the server");

      cy.get("#fetch-employees").click();
      cy.wait(500);

      const cards = ".data-list-wrapper .card-list .card";

      cy.get(cards)
        .should("have.length", numOfEmployees)
        .first()
        .should("contain", employeesData[0].name)
        .find(".card-description")
        .should("contain", employeesData[0].salary);

      cy.get(cards)
        .eq(Math.ceil(numOfEmployees / 2))
        .should("contain", employeesData[Math.ceil(numOfEmployees / 2)].name)
        .find("a.card-link")
        .should(
          "have.attr",
          "data-name",
          employeesData[Math.ceil(numOfEmployees / 2)].name
        );

      cy.get(cards)
        .last()
        .should("contain", employeesData[numOfEmployees - 1].name)
        .find(".card-description")
        .should("contain", employeesData[numOfEmployees - 1].salary);

      cy.then(() => {
        acc_score += 1;
      });
    }); // 1

    it("Alerts on click of greet link", () => {
      let numOfEmployees = employeesData.length;
      cy.log(numOfEmployees + " employees found in the server");

      cy.get("#fetch-employees").click();
      cy.wait(500);

      const cards = ".data-list-wrapper .card-list .card";

      var alerted = false;
      cy.on("window:alert", (msg) => (alerted = msg));

      cy.get(cards)
        .eq(Math.ceil(numOfEmployees / 2))
        .find("a.card-link")
        .click()
        .then(() => {
          expect(
            `Greetings from ${
              employeesData[Math.ceil(numOfEmployees / 2)].name
            }!`
          ).to.contain(alerted);
        });

      cy.then(() => {
        acc_score += 3;
      });
    }); // 2

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  }); // describe
});
