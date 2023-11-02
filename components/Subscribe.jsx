'use clinet';

import '../app/globals.css';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-Raleway',
});

export default function Subscribe() {
  return (
    <>
      <div id='mc_embed_shell' className='flex-grow sm:mb-4'>
        <div id='mc_embed_signup'>
          <form
            action='https://app.us21.list-manage.com/subscribe/post?u=dcba829fef4a1a428046191ec&amp;id=953ef19679&amp;f_id=0097e4e6f0'
            method='post'
            id='mc-embedded-subscribe-form'
            name='mc-embedded-subscribe-form'
            className='validate flex'
            target='_self'
            noValidate=''
          >
            <div id='mc_embed_signup_scroll' className='flex ml-auto mr-auto sm:ml-0'>
              <input
                type='email'
                name='EMAIL'
                className={`placeholder-${raleway.variable} placeholder-font-raleway placeholder:font-light sm:placeholder:text-[2.3vw] px-[8.3vw] lg:placeholder:translate-y-1 sm:p-[2.6vw] rounded-full h-[9vw] w-[60vw] sm:w-[27vw] sm:h-[5vw] focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-[4.5vw] sm:text-[1.5vw] required email`}
                id='mce-EMAIL'
                required=''
                placeholder='Unlock Early Access'
              />
              <div id='mce-responses' className='clear foot'>
                <div id='mce-error-response' className='hidden response'></div>
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
                    className={`bg-red-500 hover:bg-red-700 ${raleway.variable} font-raleway text-white text-[4.5vw] sm:text-[2vw] rounded-full py-[1vw] px-[2.5vw] ml-[1vw]`}
                    value='Sign Up'
                  />
                  <p>
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
