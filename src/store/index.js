import { createStore } from 'vuex'

export default createStore({
  strict: true,

  state: {
    PostsList: [
        {
          id: 1,
          author: "Mart",
          creation: "18.10.2023",
          picture: "dog.webp",
          caption: "Beauty god",
          profilepic: "me.png",
          like: "like.png",
          like_amount: 3
        },
        {
          id: 2,
          author: "Paul",
          creation: "11.09.2023",
          picture: "rat.webp",
          caption: "Funny rat",
          profilepic: "me.png",
          like: "like.png",
          like_amount: 1
        },
        {
          id: 3,
          author: "Stella",
          creation: "08.10.2023",
          picture: "tokyo.jpg",
          caption: "Another day in Japan",
          profilepic: "me.png",
          like: "like.png",
          like_amount: 22
        },
        {
          id: 4,
          author: "Broski",
          creation: "23.09.2023",
          picture: "selfie.webp",
          caption: "Monkey selfie",
          profilepic: "me.png",
          like: "like.png",
          like_amount: 21
        },
        {
          id: 5,
          author: "Helen",
          creation: "19.12.2023",
          picture: "tokyo.jpg",
          caption: "Nice Japanese city",
          profilepic: "me.png",
          like: "like.png",
          like_amount: 32
        },
        {
          id: 6,
          author: "Paul",
          creation: "03.09.2023",
          picture: "circus.webp",
          caption: "Awesome perfomance tonight",
          profilepic: "me.png",
          like: "like.png",
          like_amount: 56
        },
        {
          id: 7,
          author: "Marcus",
          creation: "21.11.2023",
          picture: "tartu.jpg",
          caption: "Tartu",
          profilepic: "me.png",
          like: "like.png",
          like_amount: 5
        },
        {
          id: 8,
          author: "Maria",
          creation: "05.10.2023",
          picture: "football.jpg",
          caption: "Bad game, feel upset",
          profilepic: "me.png",
          like: "like.png",
          like_amount: 11
        },
        {
          id: 9,
          author: "Cristopher",
          creation: "01.09.2023",
          picture: "delta.jpg",
          caption: "Delta Uni",
          profilepic: "me.png",
          like: "like.png",
          like_amount: 12
        },
        {
          id: 10,
          author: "Joseph",
          creation: "16.11.2023",
          picture: "rademar.jpg",
          caption: "Pretty good sport store",
          profilepic: "me.png",
          like: "like.png",
          like_amount: 20
        }
      ]  
  },
  getters: {
    PostsListGet: state => {
      return state.PostsList.map(p => {
          return {
              id: p.id,
              author: p.author,
              creation: p.creation,
              picture: p.picture,
              caption: p.caption,
              profilepic: p.profilepic,
              like: p.like,
              like_amount: p.like_amount
          }
      });
  }
  },
  mutations: {
    IncreaseLike: state => {
      state.PostsList.forEach(post => {
          post.like_amount += 1;
      })
  },
    ResetLikes: state => {
      state.PostsList.forEach(post => {
          post.like_amount = 0;
      })
  }
  },
  actions: {
    IncreaseLikeAct: act => {
      setTimeout(function() {
          act.commit("IncreaseLike")
      }, 100)
  },
  ResetLikesAct: act => {
    setTimeout(function() {
        act.commit("ResetLikes")
    }, 100)
}
  },
  
})
