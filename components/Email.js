export default function Email() {
    return (
      <form className='mt-4' name="contact" action="/" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div className='flex flex-col items-center'>
        <p>
          <input className='p-2 border rounded' type="email" name="email" placeholder='Your Email' id="youremail" />
        </p>
        <p>
          <button className='mt-2 bg-gray-100 py-2 px-6 border rounded' type="submit">Join our Community</button>
        </p>

        </div>
      </form>
    )
  }