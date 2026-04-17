'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

export default function GrpcBlog() {
  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'what-is-grpc', title: 'what is gRPC?' },
      { id: 'how-it-works', title: 'how it works' },
      { id: 'why-good', title: 'why use gRPC?' },
      { id: 'grpc-with-go', title: 'gRPC with go' },
      { id: 'when-to-use', title: 'when to use gRPC' },
    ],
    [],
  );

  useEffect(() => {
    document.title = 'an introduction to grpc';
  }, []);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-12 lg:grid lg:grid-cols-[1fr_minmax(0,32rem)_1fr] lg:gap-8 lg:items-start">
        <TableOfContents sections={sections} title="contents" />
        <ImageLightbox>
          <article className="w-full lg:max-w-lg lg:mx-auto">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-stone-500 btn-interactive mb-4 text-sm px-2 py-1 -ml-2 rounded-md"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              back
            </Link>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
              an introduction to grpc
            </h1>
            <p className="text-stone-500 text-sm mb-6">nicholas chen · march 10, 2026 · 7 min read</p>

            {/* Cover image */}
            <img src="/blogs/grpc/grpc_logo.png" alt="gRPC" className="w-full mb-6" />
            <hr className="border-stone-700 mb-8" />

            {/* Content */}
            <div
              className="space-y-8 text-xs md:text-sm leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              <section>
                <p>grpc (google remote procedure call) is a modern, open-source, high-performance rpc framework that can run in any environment. it can efficiently connect services in and across data centers with pluggable support for load balancing, tracing, health checking and authentication. it is also applicable in last mile of distributed computing to connect devices, mobile applications and browsers to backend services.</p>
                <h2
                  id="what-is-grpc"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  what is gRPC?
                </h2>
                <p>at its core, gRPC allows a client application to directly call a method on a server application on a different machine as if it were a local object, making it easier for you to create distributed applications and services. like many rpc systems, gRPC is based around the idea of defining a service, specifying the methods that can be called remotely with their parameters and return types.</p>
              </section>

              <section>
                <h2
                  id="how-it-works"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  how it works
                </h2>
                <p className="mb-6">on the server side, the server implements this interface and runs a gRPC server to handle client calls. on the client side, the client has a stub (referred to as just a client in some languages) that provides the same methods as the server.</p>

                <div className="mt-6 bg-white rounded-md p-4">
                  <img
                    src="/blogs/grpc/architecture-grpc.jpg"
                    alt="gRPC Architecture"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-stone-500 italic text-center text-xs mt-2">
                  gRPC architecture across different languages
                </p>

                <p className="mt-6">by default, gRPC uses protocol buffers, google's mature open source mechanism for serializing structured data (although it can be used with other data formats such as json). when working with protocol buffers, the first step is to define the structure for the data you want to serialize in a proto file: this is an ordinary text file with a .proto extension.</p>

                <div className="mt-8">
                  <pre className="bg-stone-800/50 p-4 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700">
                    {`syntax = "proto3";

package greeting;

// The greeting service definition.
service Greeter {
  // Sends a greeting
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user's name.
message HelloRequest {
  string name = 1;
}

// The response message containing the greetings
message HelloReply {
  string message = 1;
}`}
                  </pre>
                  <p className="text-stone-500 italic text-center text-xs mt-1">
                    simple .proto service definition
                  </p>
                </div>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
                  using the gRPC API
                </h3>
                <p className="mb-4">once you've defined your messages and services in your .proto file, you use the protocol buffer compiler protoc to generate client and server-side code in your preferred language. gRPC provides plugins for many popular programming languages including java, c++, python, objective-c, c#, go, ruby and node.js.</p>
                <p className="mb-4">you use the generated server-side code to implement your service's business logic, and the generated client-side code to make rpc calls to your server. gRPC handles all the complexity of communicating over the network, including serialization, transport, and error handling.</p>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
                  service method types
                </h3>
                <p className="mb-4">gRPC allows you to define four kinds of service methods:</p>

                <div className="my-6">
                  <img
                    src="/blogs/grpc/streaming.png"
                    alt="gRPC streaming types"
                    className="w-full rounded-md border border-stone-700"
                  />
                  <p className="text-stone-500 italic text-center text-xs mt-1">
                    the four types of gRPC service methods
                  </p>
                </div>

                <ul className="space-y-4 text-stone-300 list-disc list-inside ml-4">
                  <li>
                    <strong className="text-white">unary RPCs</strong>:{' '}
                    where the client sends a single request to the server and gets a single response back, just like a normal function call.
                    <pre className="bg-stone-800/50 p-3 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 mt-2">
                      {`rpc GetUser(UserRequest) returns (UserResponse);`}
                    </pre>
                  </li>

                  <li>
                    <strong className="text-white">server streaming RPCs</strong>:{' '}
                    where the client sends a request to the server and gets a stream to read a sequence of messages back. the client reads from the returned stream until there are no more messages. gRPC guarantees message ordering within an individual rpc call.
                    <pre className="bg-stone-800/50 p-3 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 mt-2">
                      {`rpc ListItems(ListRequest) returns (stream ItemResponse);`}
                    </pre>
                  </li>

                  <li>
                    <strong className="text-white">client streaming RPCs</strong>:{' '}
                    where the client writes a sequence of messages and sends them to the server, again using a provided stream. once the client has finished writing the messages, it waits for the server to read them and return its response. again gRPC guarantees message ordering within an individual rpc call.
                    <pre className="bg-stone-800/50 p-3 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 mt-2">
                      {`rpc UploadData(stream DataChunk) returns (UploadResponse);`}
                    </pre>
                  </li>

                  <li>
                    <strong className="text-white">
                      bidirectional streaming RPCs
                    </strong>
                    : where both sides send a sequence of messages using a read-write stream. the two streams operate independently, so clients and servers can read and write in whatever order they like: for example, the server could wait to receive all the client messages before writing its responses, or it could alternately read a message then write a message, or some other combination of reads and writes. the order of messages in each stream is preserved.
                    <pre className="bg-stone-800/50 p-3 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 mt-2">
                      {`rpc Chat(stream MessageRequest) returns (stream MessageResponse);`}
                    </pre>
                  </li>
                </ul>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
                  deadlines/timeouts
                </h3>
                <p className="mb-4">gRPC allows clients to specify how long they are willing to wait for an rpc to complete before the rpc is terminated with a DEADLINE_EXCEEDED error. on the server side, the server can query to see if a particular rpc has timed out, or how much time is left to complete the rpc.</p>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
                  rpc termination
                </h3>
                <p className="mb-4">in gRPC, both the client and server make independent and local determinations of the success of the call, and their conclusions may not match. this means that, for example, you could have an rpc that finished successfully on the server side ("i have sent all my responses!") but failed on the client side ("the responses arrived after my deadline!").</p>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
                  metadata
                </h3>
                <p className="mb-4">metadata is information about a particular rpc call (such as authentication details) in the form of a list of key-value pairs, where the keys are strings and the values are typically strings, but can be binary data.</p>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
                  channels
                </h3>
                <p className="mb-4">a gRPC channel provides a connection to a gRPC server on a specified host and port. it is used when creating a client stub. clients can specify channel arguments to modify gRPC's default behavior, such as switching message compression on or off.</p>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
                  error handling
                </h3>
                <p className="mb-4">gRPC uses a set of well-defined status codes (like OK, CANCELLED, INVALID_ARGUMENT, etc.) to indicate the outcome of an rpc call. these codes are similar to http status codes but are more specific to rpc systems.</p>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
                  security
                </h3>
                <p className="mb-4">gRPC is designed to work with various authentication mechanisms, making it easy to use safely to communicate between systems. you can use alts or tls (with or without google-based authentication) to encrypt and authenticate connections.</p>
              </section>

              <section>
                <h2
                  id="why-good"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  why use gRPC?
                </h2>

                <p className="mb-6">gRPC is a powerful tool for building high-performance, scalable distributed systems. it's efficient, language-agnostic, and provides strong typing out of the box. while it has a steeper learning curve than rest, the benefits in performance and developer productivity often make it worth the investment.</p>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-2 mt-6">
                  HTTP/1.1 vs HTTP/2
                </h3>
                <p className="mb-6">HTTP/2 is the next-generation protocol for the web, providing significant performance improvements over HTTP/1.1. gRPC uses HTTP/2 as its transport protocol, allowing it to take advantage of features like multiplexing, header compression, and server push.</p>

                <div className="my-6 overflow-x-auto">
                  <table className="w-full border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="border-b border-stone-700">
                        <th className="text-left py-3 px-4 font-semibold text-white">feature</th>
                        <th className="text-left py-3 px-4 font-semibold text-white">HTTP/1.1</th>
                        <th className="text-left py-3 px-4 font-semibold text-white">HTTP/2</th>
                      </tr>
                    </thead>
                    <tbody className="text-stone-300">
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">multiplexing</td>
                        <td className="py-3 px-4">no (one request per connection)</td>
                        <td className="py-3 px-4">
                          yes (multiple requests over single connection)
                        </td>
                      </tr>
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">header compression</td>
                        <td className="py-3 px-4">no</td>
                        <td className="py-3 px-4">yes (HPACK)</td>
                      </tr>
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">framing</td>
                        <td className="py-3 px-4">text-based</td>
                        <td className="py-3 px-4">binary framing</td>
                      </tr>
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">server push</td>
                        <td className="py-3 px-4">no</td>
                        <td className="py-3 px-4">yes</td>
                      </tr>
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">
                          request prioritization
                        </td>
                        <td className="py-3 px-4">no</td>
                        <td className="py-3 px-4">yes</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-stone-200">efficiency</td>
                        <td className="py-3 px-4">higher latency, more bandwidth</td>
                        <td className="py-3 px-4">lower latency, reduced bandwidth</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="my-6">
                  <img
                    src="/blogs/grpc/http2.png"
                    alt="HTTP 1.1 vs HTTP/2"
                    className="w-full rounded-md border border-stone-700"
                  />
                  <p className="text-stone-500 italic text-center text-xs mt-1">
                    HTTP/1.1 vs HTTP/2 protocol comparison
                  </p>
                </div>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-2 mt-8">
                  RPC vs REST
                </h3>
                <p className="mb-6 whitespace-pre-wrap">the difference between rpc (remote procedure call) and rest (representational state transfer) is mostly philosophical. rpc is focused on actions—calling functions on a remote server as if they were local. rest is focused on resources—manipulating data objects through standard http methods (GET, POST, etc.). rpc is typically more performant and easier to use for internal service-to-service communication, while rest is better for public-facing apis.</p>

                <div className="my-6 overflow-x-auto">
                  <table className="w-full border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="border-b border-stone-700">
                        <th className="text-left py-3 px-4 font-semibold text-white">
                          feature
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-white">gRPC</th>
                        <th className="text-left py-3 px-4 font-semibold text-white">REST</th>
                      </tr>
                    </thead>
                    <tbody className="text-stone-300">
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">
                          transport
                        </td>
                        <td className="py-3 px-4">HTTP/2</td>
                        <td className="py-3 px-4">HTTP/1.1</td>
                      </tr>
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">
                          data format
                        </td>
                        <td className="py-3 px-4">protobuf (binary)</td>
                        <td className="py-3 px-4">JSON (text)</td>
                      </tr>
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">
                          streaming
                        </td>
                        <td className="py-3 px-4">native support (client, server, bidi)</td>
                        <td className="py-3 px-4">limited (server-side events)</td>
                      </tr>
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">
                          code generation
                        </td>
                        <td className="py-3 px-4">automatic via protoc</td>
                        <td className="py-3 px-4">manual (swagger/openapi)</td>
                      </tr>
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">
                          type safety
                        </td>
                        <td className="py-3 px-4">strictly enforced</td>
                        <td className="py-3 px-4">runtime checks (dynamic)</td>
                      </tr>
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">
                          performance
                        </td>
                        <td className="py-3 px-4">extremely high (low overhead)</td>
                        <td className="py-3 px-4">lower (higher overhead)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-stone-200">
                          browser support
                        </td>
                        <td className="py-3 px-4">limited (requires gRPC-web)</td>
                        <td className="py-3 px-4">native (supported everywhere)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-2 mt-8">
                  protocol buffers (binary) vs JSON (text)
                </h3>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <pre className="bg-stone-800/50 p-4 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 h-[180px]">
                      {`// Protocol Buffers (.proto)
message User {
  string name = 1;
  int32 age = 2;
  string email = 3;
}

// Serialized (binary, compact)`}
                    </pre>
                    <p className="text-stone-500 italic text-center text-xs mt-1">
                      protobuf: binary serialization format
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <pre className="bg-stone-800/50 p-4 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 h-[180px]">
                      {`// JSON (text, human-readable)
{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com"
}`}
                    </pre>
                    <p className="text-stone-500 italic text-center text-xs mt-1">
                      JSON: human-readable text format
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2
                  id="grpc-with-go"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  gRPC with go
                </h2>
                <p className="mb-4">golang and gRPC go together like peanut butter and jelly. both were built at google with high-performance networking in mind. go's built-in support for concurrency via goroutines makes it perfect for handling the streaming rpcs that gRPC excels at.</p>
                <p className="mb-4">most modern cloud infrastructure and microservices are built using go and gRPC. for example, the entire kubernetes ecosystem relies heavily on gRPC for communication between its various components.</p>
                <p className="mb-4">using gRPC in go is simple: you define your service in a .proto file, use the protoc-gen-go and protoc-gen-go-grpc plugins to generate the go code, and then implement the service interface in your go application. the result is a fast, type-safe, and efficient service that's easy to maintain and scale.</p>

                <div className="my-6">
                  <img
                    src="/blogs/grpc/go.png"
                    alt="gRPC with Go"
                    className="w-full max-h-64 object-contain rounded-md border border-stone-700"
                  />
                  <p className="text-stone-500 italic text-center text-xs mt-1">
                    gRPC's tight integration with the Go ecosystem
                  </p>
                </div>

                <div className="mt-8">
                  <pre className="bg-stone-800/50 p-4 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700">
                    {`// Server implementation
type server struct {
    pb.UnimplementedGreeterServer
}

func (s *server) SayHello(ctx context.Context, req *pb.HelloRequest) (*pb.HelloReply, error) {
    return &pb.HelloReply{Message: "Hello " + req.Name}, nil
}

func main() {
    lis, _ := net.Listen("tcp", ":50051")
    s := grpc.NewServer()
    pb.RegisterGreeterServer(s, &server{})
    s.Serve(lis)
}`}
                  </pre>
                  <p className="text-stone-500 italic text-center text-xs mt-1">
                    server-side gRPC implementation in Go
                  </p>
                </div>

                <div className="mt-6">
                  <pre className="bg-stone-800/50 p-4 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700">
                    {`// Client implementation
func main() {
    conn, _ := grpc.Dial("localhost:50051", grpc.WithInsecure())
    defer conn.Close()
    
    c := pb.NewGreeterClient(conn)
    ctx := context.Background()
    r, _ := c.SayHello(ctx, &pb.HelloRequest{Name: "world"})
    
    fmt.Println(r.Message)
}`}
                  </pre>
                  <p className="text-stone-500 italic text-center text-xs mt-1">
                    client-side gRPC implementation in Go
                  </p>
                </div>
              </section>

              <section>
                <h2
                  id="when-to-use"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  when to use gRPC
                </h2>
                <p className="mb-4">while gRPC is fantastic, it's not a silver bullet for every project. here's a quick guide on when you should consider using it:</p>
                <ul className="space-y-2 text-stone-300 list-disc list-inside ml-4 mb-4">
                  <li>internal microservices communication</li>
                  <li>real-time streaming services</li>
                  <li>polyglot environments (multiple languages)</li>
                  <li>low-bandwidth or high-performance requirements</li>
                </ul>
                <p className="mb-4">gRPC is widely used by companies like:</p>
                <ul className="space-y-2 text-stone-300 list-disc list-inside ml-4">
                  <li>google</li>
                  <li>netflix</li>
                  <li>uber</li>
                </ul>
              </section>

              <section className="border-t border-stone-700 pt-6 mt-8">
                <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                  references
                </h3>
                <ul className="space-y-2 text-stone-400 text-xs md:text-sm">
                  <li>
                    <a
                      href="https://grpc.io/docs/"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500 underline"
                    >
                      official gRPC docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/grpc"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500 underline"
                    >
                      gRPC github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://protobuf.dev/overview/"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500 underline"
                    >
                      protocol buffers documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.cloudflare.com/fr-fr/http3-the-past-present-and-future/"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500 underline"
                    >
                      HTTP/3: the past, present and future (cloudflare)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://engineering.brevo.com/a-brief-introduction-to-grpc/"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500 underline"
                    >
                      a brief introduction to gRPC (brevo)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://algodaily.com/lessons/rest-rpc-and-distributed-api-design"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500 underline"
                    >
                      REST, RPC and distributed API design (algodaily)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailcall.run/blog/what-is-grpc/"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500 underline"
                    >
                      gRPC decoded: the API protocol that's changing everything (tailcall)
                    </a>
                  </li>
                </ul>
              </section>
            </div>

            <Footer className="mt-10" />
          </article>
        </ImageLightbox>
      </div>
    </main>
  );
}
