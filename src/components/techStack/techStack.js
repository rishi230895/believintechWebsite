
export default {
  name: 'tech-stack',
  components: {},
  props: [],
  data () {
    return {
      techwraps:[{
          heading: "Front-end Technologies",
          description: "The Frontend Stack we use to develop beautiful websites to enhance the user experience",
          items:[{
            techLogo: "https://www.classicinformatics.com/hubfs/images/HTML5.png",
            techName: "HTML5"
          },
          {
            techLogo: "https://www.classicinformatics.com/hubfs/images/CSS3.png",
            techName: "CSS3"
          },
          {
            techLogo: "https://www.classicinformatics.com/hubfs/images/JavaScript.png",
            techName: "JavaScript"
          },
          {
            techLogo: "https://f.hubspotusercontent40.net/hubfs/6062099/Vue.png",
            techName: "Vue"
          }]
        },
        {
          heading: "Back-end Technologies",
          description: "The Backend Stack we use to store the users data",
          items:[{
            techLogo: "https://f.hubspotusercontent40.net/hubfs/6062099/images/PHP.png",
            techName: "PHP"
          },
          {
            techLogo: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
            techName: "My SQL"
          }]
        },
        {
          heading: "Mobile Technologies",
          description: "The Mobile Stack we use to develop mobile apps",
          items:[{
            techLogo: "https://www.classicinformatics.com/hubfs/images/React.png",
            techName: "React Native"
          }]
        },
        {
          heading: "CMS Platforms",
          description: "The CMS we use for content management",
          items:[{
            techLogo: "https://f.hubspotusercontent40.net/hubfs/6062099/images/Drupal.png",
            techName: "Drupal"
          },
          {
            techLogo: "https://f.hubspotusercontent40.net/hubfs/6062099/images/Wordpress.png",
            techName: "Wordpress"
          },
          {
            techLogo: "https://f.hubspotusercontent40.net/hubfs/6062099/images/Magento.png",
            techName: "Magento"
          }]
        }
      ]}
    },
  computed: {
    
  },
  mounted () {
    
  },
  methods: {

  }
}


