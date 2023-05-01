FROM golang:1.20.3-alpine3.17 as builder

WORKDIR /app

COPY src/ .

RUN go build -o fullcycle



FROM scratch

WORKDIR /app

COPY --from=builder /app/fullcycle .

CMD ["./fullcycle"]


