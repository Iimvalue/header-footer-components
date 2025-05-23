export default function Footer() {
  return (
    <>
      <footer className="bg-body-tertiary text-center">
        <div className="container p-4">
          <section className="mb-4">
            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google" />
            </a>
            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-github" />
            </a>
          </section>
          <section className>
            <form action>
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="form5Example24"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form5Example24">
                      Email address
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <button
                    data-mdb-ripple-init
                    type="submit"
                    className="btn btn-outline mb-4"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>
          <section className>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Products</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2020 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
}
