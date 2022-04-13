class WelcomeSubscriber {
    constructor({ welcomeService, eventBusService }) {
      this.welcomeService_ = welcomeService
  
      eventBusService.subscribe("order.placed", this.handleWelcome)
    }
  
    handleWelcome = async (data) => {
      return await this.welcomeService_.sendWelcome(data.id)
    }
  }
  
  export default WelcomeSubscriber