'use clinet';

import '../app/globals.css';

export default function Subscribe() {
  return (
    <>

        <div id='mc_embed_shell' className='flex-grow mb-4'>
          <div id='mc_embed_signup' >
            <form
              action='https://app.us21.list-manage.com/subscribe/post?u=dcba829fef4a1a428046191ec&amp;id=953ef19679&amp;f_id=0097e4e6f0'
              method='post'
              id='mc-embedded-subscribe-form'
              name='mc-embedded-subscribe-form'
              className='validate flex'
              target='_self'
              noValidate=''
            >
              <div id='mc_embed_signup_scroll'>
                  <input
                    type='email'
                    name='EMAIL'
                    className='placeholder-font-raleway placeholder:font-light placeholder:text-[3vw] px-[1.5vw] py-[1vw] rounded-[29px] w-[47vw] focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-4xl required email'
                    id='mce-EMAIL'
                    required=''
                    placeholder='Unlock your early access'
                  />
                <div id='mce-responses'
                 className='clear foot'
                 >
                  <div
                    id='mce-error-response'
                    className='hidden response'
                  ></div>
                  <div
                    id='mce-success-response'
                    className='hidden response'
                  ></div>
                </div>
                <div
                  aria-hidden='true'
                  // style='position: absolute; left: -5000px;'
                >
                  <input
                  className='hidden'
                    type='text'
                    name='b_dcba829fef4a1a428046191ec_953ef19679'
                    tabIndex='-1'
                    defaultValue=''
                  />
                </div>
                <div className='optionalParent'>
                  <div className='clear foot'>
                    <input
                      type='submit'
                      name='subscribe'
                      id='mc-embedded-subscribe'
                      className='button'
                      value='Subscribe'
                    />
                    <p >
                      <a
                        href='http://eepurl.com/iCz-cc'
                        title='Mailchimp - email marketing made easy and fun'
                      >
                        <span>
                          <imgage
                            className='refferal_badge'
                            src='https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg'
                            alt='Intuit Mailchimp'
                          />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* <input
          className='placeholder-font-raleway placeholder:font-light placeholder:text-[46px] px-4 py-4 rounded-[39px] w-[842px] focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-4xl'
          type='email'
          placeholder='Unlock your early access'
        /> */}
      {/* </form> */}
    </>
  );
}
