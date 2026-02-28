'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

export default function GrpcBlog() {
  const { language, setLanguage, t } = useLanguage();

  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'what-is-grpc', title: t('blog.grpc.whatIsTitle') },
      { id: 'how-it-works', title: t('blog.grpc.howItWorksTitle') },
      { id: 'why-good', title: t('blog.grpc.whyGoodTitle') },
      { id: 'grpc-with-go', title: t('blog.grpc.grpcWithGoTitle') },
      { id: 'when-to-use', title: t('blog.grpc.whenToUseTitle') },
    ],
    [t],
  );

  useEffect(() => {
    document.title = t('blog.grpc.title');
  }, [t, language]);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-12 lg:grid lg:grid-cols-[1fr_minmax(0,32rem)_1fr] lg:gap-8 lg:items-start">
        <TableOfContents sections={sections} title={t('blog.contents')} />
        <ImageLightbox>
          <article className="w-full lg:max-w-lg lg:mx-auto">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-100 hover:bg-stone-800/80 transition-colors mb-4 text-sm px-2 py-1 -ml-2 rounded-md"
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
              {t('blog.back')}
            </Link>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
              {t('blog.grpc.title')}
            </h1>
            <p className="text-stone-500 text-sm mb-6">{t('blog.grpc.date')}</p>

            {/* Cover image */}
            <img src="/blogs/grpc/grpc_logo.png" alt="gRPC" className="w-full mb-6" />
            <hr className="border-stone-700 mb-8" />

            {/* Content */}
            <div
              className="space-y-8 text-xs md:text-sm leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              <section>
                <p>{t('blog.grpc.intro')}</p>
                <h2
                  id="what-is-grpc"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.grpc.whatIsTitle')}
                </h2>
                <p>{t('blog.grpc.whatIsText')}</p>
              </section>

              <section>
                <h2
                  id="how-it-works"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.grpc.howItWorksTitle')}
                </h2>
                <p className="mb-6">{t('blog.grpc.howItWorksText1')}</p>

                <div className="mt-6 bg-white rounded-md p-4">
                  <img
                    src="/blogs/grpc/architecture-grpc.jpg"
                    alt="gRPC Architecture"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-stone-500 italic text-center text-xs mt-2">
                  {t('blog.grpc.architectureCaption')}
                </p>

                <p className="mt-6">{t('blog.grpc.howItWorksText2')}</p>

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
                    {t('blog.grpc.protoExampleCaption')}
                  </p>
                </div>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
                  {t('blog.grpc.usingApiTitle')}
                </h3>
                <p className="mb-4">{t('blog.grpc.usingApiText')}</p>
                <p className="mb-4">{t('blog.grpc.usingApiText2')}</p>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
                  {t('blog.grpc.serviceMethodTypesTitle')}
                </h3>
                <p className="mb-4">{t('blog.grpc.serviceMethodTypesIntro')}</p>

                <div className="my-6">
                  <img
                    src="/blogs/grpc/streaming.png"
                    alt="gRPC streaming types"
                    className="w-full rounded-md border border-stone-700"
                  />
                  <p className="text-stone-500 italic text-center text-xs mt-1">
                    {t('blog.grpc.serviceMethodTypesCaption')}
                  </p>
                </div>

                <ul className="space-y-4 text-stone-300 list-disc list-inside ml-4">
                  <li>
                    <strong className="text-white">{t('blog.grpc.unaryRPCs')}</strong>:{' '}
                    {t('blog.grpc.unaryRPCsDesc')}
                    <pre className="bg-stone-800/50 p-3 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 mt-2">
                      {`rpc GetUser(UserRequest) returns (UserResponse);`}
                    </pre>
                  </li>

                  <li>
                    <strong className="text-white">{t('blog.grpc.serverStreamingRPCs')}</strong>:{' '}
                    {t('blog.grpc.serverStreamingRPCsDesc')}
                    <pre className="bg-stone-800/50 p-3 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 mt-2">
                      {`rpc ListItems(ListRequest) returns (stream ItemResponse);`}
                    </pre>
                  </li>

                  <li>
                    <strong className="text-white">{t('blog.grpc.clientStreamingRPCs')}</strong>:{' '}
                    {t('blog.grpc.clientStreamingRPCsDesc')}
                    <pre className="bg-stone-800/50 p-3 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 mt-2">
                      {`rpc UploadData(stream DataChunk) returns (UploadResponse);`}
                    </pre>
                  </li>

                  <li>
                    <strong className="text-white">
                      {t('blog.grpc.bidirectionalStreamingRPCs')}
                    </strong>
                    : {t('blog.grpc.bidirectionalStreamingRPCsDesc')}
                    <pre className="bg-stone-800/50 p-3 rounded-md overflow-x-auto text-[10px] md:text-xs text-stone-200 border border-stone-700 mt-2">
                      {`rpc Chat(stream MessageRequest) returns (stream MessageResponse);`}
                    </pre>
                  </li>
                </ul>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
                  {t('blog.grpc.deadlinesTitle')}
                </h3>
                <p className="mb-4">{t('blog.grpc.deadlinesText')}</p>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
                  {t('blog.grpc.rpcTerminationTitle')}
                </h3>
                <p className="mb-4">{t('blog.grpc.rpcTerminationText')}</p>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
                  {t('blog.grpc.metadataTitle')}
                </h3>
                <p className="mb-4">{t('blog.grpc.metadataText')}</p>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
                  {t('blog.grpc.channelsTitle')}
                </h3>
                <p className="mb-4">{t('blog.grpc.channelsText')}</p>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
                  {t('blog.grpc.errorHandlingTitle')}
                </h3>
                <p className="mb-4">{t('blog.grpc.errorHandlingText')}</p>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-3 mt-8">
                  {t('blog.grpc.securityTitle')}
                </h3>
                <p className="mb-4">{t('blog.grpc.securityText')}</p>
              </section>

              <section>
                <h2
                  id="why-good"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.grpc.whyGoodTitle')}
                </h2>

                <p className="mb-6">{t('blog.grpc.whyGoodText')}</p>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-2 mt-6">
                  {t('blog.grpc.httpVsHttp2Title')}
                </h3>
                <p className="mb-6">{t('blog.grpc.httpVsHttp2Text')}</p>

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
                    {t('blog.grpc.http2Caption')}
                  </p>
                </div>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-2 mt-8">
                  {t('blog.grpc.rpcVsRestTitle')}
                </h3>
                <p className="mb-6 whitespace-pre-wrap">{t('blog.grpc.rpcVsRestText')}</p>

                <div className="my-6 overflow-x-auto">
                  <table className="w-full border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="border-b border-stone-700">
                        <th className="text-left py-3 px-4 font-semibold text-white">
                          {t('blog.grpc.tableFeature')}
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-white">gRPC</th>
                        <th className="text-left py-3 px-4 font-semibold text-white">REST</th>
                      </tr>
                    </thead>
                    <tbody className="text-stone-300">
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">
                          {t('blog.grpc.tableTransport')}
                        </td>
                        <td className="py-3 px-4">HTTP/2</td>
                        <td className="py-3 px-4">HTTP/1.1</td>
                      </tr>
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">
                          {t('blog.grpc.tableDataFormat')}
                        </td>
                        <td className="py-3 px-4">{t('blog.grpc.tableProtobufBinary')}</td>
                        <td className="py-3 px-4">{t('blog.grpc.tableJsonText')}</td>
                      </tr>
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">
                          {t('blog.grpc.tableStreaming')}
                        </td>
                        <td className="py-3 px-4">{t('blog.grpc.tableStreamingNative')}</td>
                        <td className="py-3 px-4">{t('blog.grpc.tableStreamingLimited')}</td>
                      </tr>
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">
                          {t('blog.grpc.tableCodeGeneration')}
                        </td>
                        <td className="py-3 px-4">{t('blog.grpc.tableCodeGenAuto')}</td>
                        <td className="py-3 px-4">{t('blog.grpc.tableCodeGenManual')}</td>
                      </tr>
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">
                          {t('blog.grpc.tableTypeSafety')}
                        </td>
                        <td className="py-3 px-4">{t('blog.grpc.tableTypeSafetyEnforced')}</td>
                        <td className="py-3 px-4">{t('blog.grpc.tableTypeSafetyRuntime')}</td>
                      </tr>
                      <tr className="border-b border-stone-800">
                        <td className="py-3 px-4 font-medium text-stone-200">
                          {t('blog.grpc.tablePerformance')}
                        </td>
                        <td className="py-3 px-4">{t('blog.grpc.tablePerformanceHigh')}</td>
                        <td className="py-3 px-4">{t('blog.grpc.tablePerformanceLower')}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-stone-200">
                          {t('blog.grpc.tableBrowserSupport')}
                        </td>
                        <td className="py-3 px-4">{t('blog.grpc.tableBrowserSupportLimited')}</td>
                        <td className="py-3 px-4">{t('blog.grpc.tableBrowserSupportNative')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-sm md:text-base font-semibold text-stone-100 mb-2 mt-8">
                  {t('blog.grpc.protobufVsJsonTitle')}
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
                      {t('blog.grpc.protobufCaption')}
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
                      {t('blog.grpc.jsonCaption')}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2
                  id="grpc-with-go"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.grpc.grpcWithGoTitle')}
                </h2>
                <p className="mb-4">{t('blog.grpc.grpcWithGoText1')}</p>
                <p className="mb-4">{t('blog.grpc.grpcWithGoText2')}</p>
                <p className="mb-4">{t('blog.grpc.grpcWithGoText3')}</p>

                <div className="my-6">
                  <img
                    src="/blogs/grpc/go.png"
                    alt="gRPC with Go"
                    className="w-full max-h-64 object-contain rounded-md border border-stone-700"
                  />
                  <p className="text-stone-500 italic text-center text-xs mt-1">
                    {t('blog.grpc.goImageCaption')}
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
                    {t('blog.grpc.serverExampleCaption')}
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
                    {t('blog.grpc.clientExampleCaption')}
                  </p>
                </div>
              </section>

              <section>
                <h2
                  id="when-to-use"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.grpc.whenToUseTitle')}
                </h2>
                <p className="mb-4">{t('blog.grpc.whenToUseIntro')}</p>
                <ul className="space-y-2 text-stone-300 list-disc list-inside ml-4 mb-4">
                  <li>{t('blog.grpc.whenToUse1')}</li>
                  <li>{t('blog.grpc.whenToUse2')}</li>
                  <li>{t('blog.grpc.whenToUse3')}</li>
                  <li>{t('blog.grpc.whenToUse4')}</li>
                </ul>
                <p className="mb-4">{t('blog.grpc.widelyUsedBy')}</p>
                <ul className="space-y-2 text-stone-300 list-disc list-inside ml-4">
                  <li>{t('blog.grpc.widelyUsedBy1')}</li>
                  <li>{t('blog.grpc.widelyUsedBy2')}</li>
                  <li>{t('blog.grpc.widelyUsedBy3')}</li>
                </ul>
              </section>

              <section className="border-t border-stone-700 pt-6 mt-8">
                <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                  {t('blog.grpc.referencesTitle')}
                </h3>
                <ul className="space-y-2 text-stone-400 text-xs md:text-sm">
                  <li>
                    <a href="https://grpc.io/docs/" className="hover:text-stone-200 underline">
                      official gRPC docs
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/grpc" className="hover:text-stone-200 underline">
                      gRPC github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://protobuf.dev/overview/"
                      className="hover:text-stone-200 underline"
                    >
                      protocol buffers documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.cloudflare.com/fr-fr/http3-the-past-present-and-future/"
                      className="hover:text-stone-200 underline"
                    >
                      HTTP/3: the past, present and future (cloudflare)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://engineering.brevo.com/a-brief-introduction-to-grpc/"
                      className="hover:text-stone-200 underline"
                    >
                      a brief introduction to gRPC (brevo)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://algodaily.com/lessons/rest-rpc-and-distributed-api-design"
                      className="hover:text-stone-200 underline"
                    >
                      REST, RPC and distributed API design (algodaily)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailcall.run/blog/what-is-grpc/"
                      className="hover:text-stone-200 underline"
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
