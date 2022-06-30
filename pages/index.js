import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (<>
      <header>
          <nav class="navbar navbar-expand-lg  navbar-dark">
              <a class="navbar-brand" href="#">
                  <div>
                      <span class="flogo">
                          <img height={'auto'}  src="/img/Vector.png" alt="" />
                      </span>
                      <span class="logotext" >
                          <img height={'auto'}  src="/img/FUSION PROTOCOL.png" alt="" /> 
                      </span>  
                  </div>
  
                 
                
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Stake <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Portfolio</a>
                  </li>
                  <li class="nav-item">
                   <a class="nav-link" href="#">Leaderboard</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Buy FSN</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Docs</a>
                  </li>
                </ul>
                  
                  <button class="mr-sm-2 mr-lg-0 mr-md-0 connectWallet">
                      Connect Wallet 
                  </button>
              </div>
  
            </nav>
      </header>
      <main class="container">
  
          <section>
              <div class="text-white" style={{marginBottom: "64px"}}>
                  <h1>Fusion Staking</h1>
                  <p class="text-grey">Earn return on investment by depositing and staking Fusion Coin</p>
              </div>
  
              <div class="info-wrapper">
                  <div class="portfolio_value d-flex flex-wrap  flex-wrap  flex-wrap  justify-content-between">
                      <span class="value_wrapper d-flex flex-wrap  flex-wrap  flex-wrap  align-items-center">
                          <span class="p_value_label">Portfolio Value : &nbsp;</span>
                          <span class="p_value"> $54,342</span>
                      </span>
  
                      <button class="btn buy-coin-btn text-white">
                          Buy Fusion Coin
                      </button>
                  </div>
              </div>
  
              <div class=" container other-tokens d-flex flex-wrap  flex-wrap  flex-wrap ">
                  <span class="token d-flex flex-wrap  flex-wrap  flex-wrap  flex-column">
                      <span class="tokenName d-flex flex-wrap  flex-wrap  flex-wrap  flex-row align-items-center justify-content-between">
                          <span class="eclipse" id="eclipse_green"></span>
                          <span> Other Tokens </span> 
                      </span>
  
                      <span class="tokenValue">
                          $34,920
                      </span>
  
                  </span>
  
                  <span class="token d-flex flex-wrap  flex-wrap  flex-wrap  flex-column">
                      <span class="tokenName d-flex flex-wrap  flex-wrap  flex-wrap  flex-row align-items-center justify-content-between">
                          <span class="eclipse" id="eclipse_green"></span>
                          <span> Fusion </span> 
                      </span>
                      <span class="tokenValue">
                          $10,012
                      </span>
                  </span>
  
                  <span class="token d-flex flex-wrap  flex-wrap  flex-wrap  flex-column">
                      <span class="tokenName d-flex flex-wrap  flex-wrap  flex-wrap  flex-row align-items-center justify-content-between">
                          <span class="eclipse" id="eclipse_blue"></span>
                          <span> Staked </span> 
                      </span>
                      <span class="tokenValue">
                          $9,210
                      </span>
                  </span>
  
                  <span class="token d-flex flex-wrap  flex-wrap  flex-wrap  flex-column">
                      <span class="tokenName d-flex flex-wrap  flex-wrap  flex-wrap  flex-row align-items-center justify-content-between">
                          <span class="eclipse" id="eclipse_purple"></span>
                          <span> Claimable </span> 
                      </span>
                      <span class="tokenValue">
                          $34,920
                      </span>
                  </span>
              </div>
  
              <div class="container progress-container">
                  <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{width: "53%" ,background:"#3FB68B"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                      <div class="progress-bar" role="progressbar" style={{width: "15%", background:  "#51EBB4"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                      <div class="progress-bar" role="progressbar" style={{width: "25%" ,background: "#51C6EB",}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                      <div class="progress-bar" role="progressbar" style={{width: "7%", background: "#A386FE"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
  
                  <p style={{color: "#AFBED0", marginBottom: "16px"}}>Your Positions</p>
  
                  <div class="claim-reward position-wrapper d-flex flex-wrap  flex-wrap  flex-wrap  justify-content-between">
                      
                      <div class="d-flex flex-wrap  flex-wrap  flex-wrap  flex-column">
                          <span class="d-flex flex-wrap  flex-wrap  flex-wrap  align-items-center" style={{height: "38px"}}>
                              <span class="">
                                  <img  height={'auto'} src="/img/spaceship.png" alt="" />
                              </span>
                              <span class="text-white" style={{fontWeight: "700",
                              fontSize: "1.5rem",
                              margin: "0 10px"
                              }}>
                                  Silver Fusion
                              </span>
                              <span>
                                  <img  height={'auto'} src="/img/open.png" alt="" />
                              </span> 
                          </span>
                          <p class="text-light-grey">Duration: 21 July 2022 - 30 August 2022</p>
                      </div>
  
                      <div class="d-flex flex-wrap  flex-wrap  flex-wrap  flex-column">
                          <span class="text-light-grey"> Return on Investment</span>
                          <span style={{color: "rgba(81, 235, 180, 1)",
                          fontWeight: "700",
                          fontSize: "1.5rem"}}> 70%</span>
                      </div>
  
                      <div class="d-flex flex-wrap  flex-wrap  flex-wrap  flex-column">
                          <span class="text-light-grey"> Your Stake</span>
                          <span> 
                              <span class="text-white" style={{
                              fontWeight: "700",
                              fontSize: "1.5rem"}}>29,302 FUSION</span>
                              <span class="text-light-grey">$9201</span>
                          </span>
                      </div>
  
                      <div class="d-flex flex-wrap  flex-wrap  flex-wrap  flex-column">
                          <button class=" claim-reward-btn text-white ">
                              Claim Reward
                          </button>
                      </div>
  
                  </div>
              </div>
              
          </section>
  
          <section class="staking-pool">
              <h2 class="text-white staking-pool-heading" >
                  Fusion Staking Pool
              </h2>
  
              <div class="staking-pool-table-wrapper">
                  <table class="table table-responsive text-white">
                      <thead style={{border: "0"}}>
                        <tr class="text-grey">
                          <th scope="col">Staking Category</th>
                          <th scope="col">Duration</th>
                          <th scope="col">Monthly ROI</th>
                          <th scope="col">Minimum Deposit</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                          
                        <tr >
                          <td>
                              <span class="d-flex flex-wrap  flex-wrap  flex-wrap  align-items-center ">
                                  <span style={{marginRight: "16px"}}><img height={'auto'}  src="/img/silver.png" alt="" /> </span>
                                  <span>Silver Fusion</span>
                              </span>
                          </td>
                          <td> 
                              <span>30 Days</span> 
                          </td>
                          <td>
                              <span>70%</span>
                          </td>
                          <td>
                              <span>$1000 (20,000 FUSION)</span>
                          </td>
                          <td>
                              
                              <button class="stake-btn"  data-toggle="modal" data-target="#exampleModalCenter"> Stake </button>
                             
                          </td>
                        </tr>
                        
  
                        <tr>
                          <td>
                              <span class="d-flex flex-wrap  flex-wrap  flex-wrap  align-items-center ">
                                  <span  style={{marginRight: "16px"}}> <img height={'auto'}  src="/img/gold.png" alt="" /> </span>
                                  <span>Gold Fusion</span>
                              </span>
                          </td>
                          <td> 
                              <span >60 Days</span> 
                          </td>
                          <td>
                              <span>90%</span>
                          </td>
                          <td>
                              <span>$3000 (60,000 FUSION)</span>
                          </td>
                          <td> 
                              <button class="stake-btn"  data-toggle="modal" data-target="#exampleModalCenter"> Stake </button>
  
                          </td>
                        </tr>
                        
  
                        <tr>
                          <td>
                              <span class="d-flex flex-wrap  flex-wrap  flex-wrap  align-items-center ">
                                  <span  style={{marginRight: "16px"}}> <img height={'auto'}  src="/img/blue.png" alt="" /> </span>
                                  <span>Platinum Fusion</span>
                              </span>
                          </td>
                          <td> 
                              <span>90 Days</span> 
                          </td>
                          <td>
                              <span>120%</span>
                          </td>
                          <td>
                              <span>$5000 (100,000 FUSION)</span>
                          </td>
                          <td>
                              
                              <button class="stake-btn"  data-toggle="modal" data-target="#exampleModalCenter"> Stake </button>
                             
                          </td>
                        </tr>
                        
  
                        <tr>
                          <td>
                              <span class="d-flex flex-wrap  flex-wrap  flex-wrap  align-items-center ">
                                  <span  style={{marginRight: "16px"}}> <img  height={'auto'} src="/img/pink.png" alt="" /> </span>
                                  <span>Mithril Fusion</span>
                              </span>
                          </td>
                          <td> 
                              <span>120 Days</span> 
                          </td>
                          <td>
                              <span>50%</span>
                          </td>
                          <td>
                              <span>$10000 (200,000 FUSION)</span>
                          </td>
                          <td>
                              
                              <button class="stake-btn"  data-toggle="modal" data-target="#exampleModalCenter"> Stake </button>
                             
                          </td>
                        </tr>
                        
                      </tbody>
                    </table>
              </div>
          </section>
  

          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">Stake Fusion</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true"> <img height={'auto'} src="/img/ex.svg" alt="" /></span>
                  </button>
                  </div>
                  <div class="modal-body">
                      <ul class="nav nav-pills" id="pills-tab" role="tablist">
                          <li class="nav-item">
                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Staking</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Withdrawal</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Rewards</a>
                          </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                              
                              <div class="d-flex flex-wrap  flex-wrap  flex-wrap  justify-content-between text-grey" style={{marginBottom: "10px"}}>
                                  <span>
                                      Amount
                                  </span>
                                  <span>
                                      Fusion Balance: <span style={{fontWeight:"500"}}>200,000</span>
                                  </span>
                              </div>
  
                              <div class="d-flex flex-wrap  flex-wrap  flex-wrap  justify-content-between" style={{
                              background: "#0E1725",
                              borderRadius: "8px",
                              padding: "28.5px",
                              fontWeight: "700",
                              fontSize: "1.8rem",
                              marginBottom: "32px"
                              }}>
                                  <span >20,000 <small>($1000)</small></span>
                                  <span >FSN</span>
                              </div>
  
                              <div class="staking-category d-flec flex-column" style={{padding: "20px", background: "#0E1725", borderRadius: "9.75964px", marginBottom: "32px"}}>
                                  <span class="d-flex flex-wrap  flex-wrap  flex-wrap  justify-content-between" style={{marginBottom:"18px"}}>
                                      <span>Staking Category</span>
                                      <span>Silver Pool</span>
                                  </span>
                                  <span class="d-flex flex-wrap  flex-wrap  justify-content-between" style={{marginBottom:"18px"}}>
                                      <span>Amount 
                                      <span> 
                                          <img   height="20px" src="/img/info.png" alt="" />
                                      </span>
                                      </span>
                                      <span>20,000 FSN ($1,000)</span>
                                  </span>
  
                                  <span class="d-flex flex-wrap  flex-wrap  justify-content-between" style={{marginBottom:"18px"}}>
                                      <span>Duration 
                                          <span> 
                                              <img   height="20px" src="/img/info.png" alt="" />
                                          </span>
                                      </span>
                                      <span>30 Days</span>
                                  </span>
                                  <span class="d-flex flex-wrap  flex-wrap  justify-content-between" style={{marginBottom:"18px"}}>
                                      <span>Transaction Fee</span>
                                      <span>$2 <span style={{color:"rgba(171, 146, 252, 1)"}}> (Fast) </span> <span>
                                          <img   height={'auto'} src="/img/downarrow.png" alt="" />
                                      </span> </span>
                                  </span>
                              </div>
  
                              <div class="notice d-flex flex-wrap  flex-wrap " style={{background: "#0E1725", borderRadius: "8px" ,marginBottom: "32px", padding: "18px 33px"}}>
                                  <div class="img d-flex flex-wrap  flex-wrap  justify-content-center align-items-center" style={{position: "relative", marginRight: "25px"}}>
                                      <img height={'auto'}   style={{position: "absolute"}} src="/img/exclaim.png" alt="" />
                                      <img height={'auto'}  src="/img/shield.png" alt="" />
  
                                  </div>
                                  <div class="d-flex flex-wrap  flex-wrap  flex-column">
                                      <span style={{fontWeight: "700", fontSize: "1.1rem"}}>Staking $1000 for 30 days</span>
                                      <span style={{color:"#AFBED0", fontWeight: "400"}}>There’s a 20% penalty for premature withdrawal</span>
                                  </div>
                              </div>
                              <div class="d-flex flex-wrap  flex-wrap ">
                                  <button class="btn flex-grow-1 stake-btn" style={{fontWeight: "800", fontSize: "24px"}}>
                                      Stake
                                  </button>
                              </div>
                              
  
                          </div>
                          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  
                              <p style={{color: "rgba(175, 190, 208, 1)"}}>Your Positions</p>
                              <div class="position-wrapper d-flex flex-wrap  flex-wrap  justify-content-between" style={{background: "#0E1725"
                              ,borderRadius: "8px", marginBottom: "32px", padding: "28px"}}>
                                  
                                  <div class="d-flex flex-wrap  flex-wrap  flex-column">
                                      <span class="d-flex flex-wrap  flex-wrap  align-items-center">
                                          <span class="">
                                              <img height={'auto'}  src="/img/spaceship.png" alt="" />
                                          </span>
                                          <span class="text-white" style={{fontWeight: "700",
                                          fontSize: "24px", margin: "0 10px"}}>
                                              Silver Fusion
                                          </span>
                                          <span>
                                              <img height={'auto'}  src="/img/open.png" alt="" />
                                          </span> 
                                      </span>
                                      <p class="text-light-grey" style={{fontWeight: "400"}}>Duration: 21 July 2022 - 30 August 2022</p>
                                  </div>
              
  
                                  <div class="d-flex flex-wrap  flex-wrap  flex-column" >
                                      <span class="text-light-grey"> Your Stake</span>
                                      <span> 
                                          <span class="text-white" style={{fonWeight: "700",
                                          fontSize: "1.5rem"}}>29,302 FUSION</span>
                                          <span class="text-light-grey" style={{fontWeight: "400"}}>$9201</span>
                                      </span>
                                  </div>
              
              
                              </div>
  
                              <p style={{color: "rgba(175, 190, 208, 1)"}}>Your Positions</p>
  
                              <div class="d-flex flex-wrap  flex-wrap  flex-wrap " style={{marginBottom: "32px", fontWeight: "700",
                              fontSize: "36px", background: "#0E1725", borderRadius: "8px", padding: "28px"}}>
                                  <span class="text-white">2,291 FSN</span>
                              </div>
  
                              <div class="d-flex flex-wrap  flex-wrap  flex-wrap ">
                                  <button class="btn flex-grow-1 stake-btn" style={{fontWeight: "800", fontSize: "24px"}}>
                                      Claim reward
                                  </button>
                              </div>
  
                          </div>
                        </div>
                        
                  </div>
              </div>
              </div>
          </div>
    
      </main>
  </>)
}
