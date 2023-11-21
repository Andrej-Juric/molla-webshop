import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface SignInCredentials extends FieldValues {
  email: string
  password: string
}

const Login = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (_e: Error) => {
    setAuthError("Invalid email or password")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.auth
      .authenticate(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="main">
      <nav className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="#">Pages</Link>
            </li>
            <li className="breadcrumb-item active">Login</li>
          </ol>
        </div>
      </nav>
      <div
        className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
        style={{ backgroundImage: `url(images/backgrounds/login-bg.jpg)` }}
      >
        <div className="container">
          <div className="form-box">
            <div className="form-tab">
              {isSubmitting && (
                <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                  <Spinner size={24} />
                </div>
              )}

              <h3 className="title-lg">Sign In</h3>

              <form className="w-full" onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="singin-email-2">
                    Username or email address *
                  </label>
                  <Input
                    label="Email"
                    {...register("email", { required: "Email is required" })}
                    autoComplete="email"
                    errors={errors}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="singin-password-2">Password *</label>
                  <Input
                    label="Password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type="password"
                    autoComplete="current-password"
                    errors={errors}
                  />
                </div>
                {authError && (
                  <div>
                    <span className="text-rose-500 w-full text-small-regular">
                      These credentials do not match our records
                    </span>
                  </div>
                )}
                <div className="form-footer">
                  <Button className="btn btn-outline-primary-2">
                    <span>LOG IN</span>
                    <i className="icon-long-arrow-right"></i>
                  </Button>
                </div>
              </form>
              <label className="singin-email-2">
                Not a member?{" "}
                <button
                  onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
                  className="underline"
                >
                  Join us
                </button>
                .
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
