function NewPost(props) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-5">
      <div className="mx-auto max-w-2xl border-1 rounded-md p-5 outline-gray-300 bg-purple-300">
        <form className="">
          <div className="space-y-12">
            <div className="">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">Name</label>
                  <div className="mt-2">
                    <input type="text"
                      onChange={props.onNameChange}
                      name="name"
                      id="postName"
                      className="block w-full bg-white rounded-md py-1.5 px-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      placeholder="hendra" />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="something" className="block text-sm/6 font-medium text-gray-900">About</label>
                  <div className="mt-2">
                    <textarea name="something"
                      id="postSomething"
                      rows={3}
                      onChange={props.onSomethingChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    </textarea>
                  </div>
                  <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about this person</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm/6 font-semibold text-gray-900">Cancel</button>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default NewPost;