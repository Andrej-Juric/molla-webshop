import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    setAuthError("An error occured. Please try again.")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.customers
      .create(credentials)
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

              <h3 className="title-lg">Register</h3>

              <form className="w-full flex flex-col" onSubmit={onSubmit}>
                <div className="flex flex-col w-full gap-y-2">
                  <label htmlFor="singin-email-2">First name *</label>
                  <Input
                    label="First name"
                    {...register("first_name", {
                      required: "First name is required",
                    })}
                    autoComplete="given-name"
                    errors={errors}
                  />
                  <label htmlFor="singin-email-2">Last name *</label>
                  <Input
                    label="Last name"
                    {...register("last_name", {
                      required: "Last name is required",
                    })}
                    autoComplete="family-name"
                    errors={errors}
                  />
                  <label htmlFor="singin-email-2">Email address *</label>
                  <Input
                    label="Email"
                    {...register("email", { required: "Email is required" })}
                    autoComplete="email"
                    errors={errors}
                  />
                  <label htmlFor="singin-email-2">Phone number</label>
                  <Input
                    label="Phone"
                    {...register("phone")}
                    autoComplete="tel"
                    errors={errors}
                  />
                  <label htmlFor="singin-password-2">Password *</label>
                  <Input
                    label="Password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type="password"
                    autoComplete="new-password"
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
                <label className="singin-email-2">
                  By creating an account, you agree to Acme&apos;s{" "}
                  <Link href="/content/privacy-policy" className="underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/content/terms-of-use" className="underline">
                    Terms of Use
                  </Link>
                  .
                </label>
                <div className="form-footer">
                  <Button className="btn btn-outline-primary-2">
                    <span>REGISTER</span>
                    <i className="icon-long-arrow-right"></i>
                  </Button>
                </div>
              </form>

              <label className="singin-email-2">
                Already a member?{" "}
                <button
                  onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
                  className="underline"
                >
                  Sign in
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

export default Register
