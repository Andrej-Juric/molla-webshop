import { CheckoutFormValues } from "@lib/context/checkout-context"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import CountrySelect from "../country-select"

const BillingAddress = () => {
  return (
    <ConnectForm<CheckoutFormValues>>
      {({ register, formState: { errors, touchedFields } }) => (
        <>
          <div className="row">
            <div className="col-sm-6">
              <label>First Name *</label>
              <Input
                label=""
                {...register("billing_address.first_name", {
                  required: "First name is required",
                })}
                autoComplete="given-name"
                errors={errors}
                touched={touchedFields}
                className="form-control"
              />
            </div>
            <div className="col-sm-6">
              <label>Last Name *</label>
              <Input
                label=""
                {...register("billing_address.last_name", {
                  required: "Last name is required",
                })}
                autoComplete="family-name"
                errors={errors}
                touched={touchedFields}
                className="form-control"
              />
            </div>
          </div>

          <label>Company (Optional)</label>
          <Input
            label=""
            {...register("billing_address.company")}
            autoComplete="organization"
            errors={errors}
            touched={touchedFields}
            className="form-control"
          />
          <label>Address *</label>
          <Input
            label=""
            {...register("billing_address.address_1", {
              required: "Address is required",
            })}
            autoComplete="address-line1"
            errors={errors}
            touched={touchedFields}
            className="form-control"
            placeholder="House number and Street name"
          />
          <Input
            label=""
            {...register("billing_address.address_2")}
            autoComplete="address-line2"
            errors={errors}
            touched={touchedFields}
            className="form-control"
            placeholder="Apartments, suite, etc."
          />

          <div className="row">
            <div className="col-sm-6">
              <label>City *</label>
              <Input
                label=""
                {...register("billing_address.city", {
                  required: "City is required",
                })}
                autoComplete="address-level2"
                errors={errors}
                touched={touchedFields}
                className="form-control"
              />
            </div>
            <div className="col-sm-6">
              <label>State / Province</label>
              <Input
                label=""
                {...register("billing_address.province")}
                autoComplete="address-level1"
                errors={errors}
                touched={touchedFields}
                className="form-control"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <label>Postal code *</label>
              <Input
                label=""
                {...register("billing_address.postal_code", {
                  required: "Postal code is required",
                })}
                autoComplete="postal-code"
                errors={errors}
                touched={touchedFields}
                className="form-control"
              />
            </div>
            <div className="col-sm-6">
              <label>Phone</label>
              <Input
                label=""
                {...register("billing_address.phone")}
                autoComplete="tel"
                errors={errors}
                touched={touchedFields}
                className="form-control"
              />
            </div>
          </div>
        </>
      )}
    </ConnectForm>
  )
}

export default BillingAddress
