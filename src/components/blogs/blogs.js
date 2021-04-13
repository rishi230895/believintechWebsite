
export default {
  name: 'blogs',
  components: {},
  props: [],
  data () {
    return {
      blogs:[{
        blogThumbnail: "https://picsum.photos/300/300/?image=41",
        blogTitle: "Latest Web Technology",
        blogContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur iste praesentium in consequuntur repellat exercitationem...",
        author: "Vidur",
        publishDate: "1 Jan 21",
        commentNo: "220 Comments"
      },
      {
        blogThumbnail: "https://images.pexels.com/photos/7082446/pexels-photo-7082446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        blogTitle: "Latest Mobile Technology",
        blogContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur iste praesentium in consequuntur repellat exercitationem...",
        author: "Vidur",
        publishDate: "1 Jan 21",
        commentNo: "220 Comments"
      },
      {
        blogThumbnail: "https://images.pexels.com/photos/799878/pexels-photo-799878.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        blogTitle: "5 Best JS Frameworks",
        blogContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur iste praesentium in consequuntur repellat exercitationem...",
        author: "Vidur",
        publishDate: "1 Jan 21",
        commentNo: "220 Comments"
      }]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}


