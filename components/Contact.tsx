<form
  onSubmit={handleSubmit}
  className="space-y-4"
  action="https://formspree.io/f/xwveggld"
  method="POST"
>
  {error && (
    <div className="bg-red-950/50 border border-red-500/50 rounded-xl p-4 text-red-400 font-semibold">
      {error}
    </div>
  )}

  {/* Your existing form fields remain exactly as they are */}
  <div>
    <label className="block text-gray-300 font-semibold mb-2">
      Name <span className="text-teal-400">*</span>
    </label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 transition-all glow-border"
      placeholder="Your name"
    />
  </div>

  {/* ... all other form fields stay exactly as you have them ... */}

  {/* Add these hidden fields before the submit button */}
  <input type="hidden" name="_subject" value={`New Travel Inquiry from ${formData.name || 'Customer'}`} />
  <input type="hidden" name="_replyto" value={formData.email} />
  <input type="hidden" name="_next" value="https://bznomad.com/thank-you" />
  <input type="hidden" name="_format" value="plain" />

  <button
    type="submit"
    className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-dark-950 rounded-lg font-bold hover:shadow-glow-teal-lg transition-all duration-300 hover:scale-105 border border-teal-400/50"
  >
    Send Message
  </button>

  <p className="text-xs text-gray-400 text-center">
    <span className="text-teal-400">*</span> Required fields
  </p>
</form>