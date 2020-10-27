// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.12.4
// source: broker.proto

package proto

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ConnInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ServiceId uint32 `protobuf:"varint,1,opt,name=service_id,json=serviceId,proto3" json:"service_id,omitempty"`
	Network   string `protobuf:"bytes,2,opt,name=network,proto3" json:"network,omitempty"`
	Address   string `protobuf:"bytes,3,opt,name=address,proto3" json:"address,omitempty"`
}

func (x *ConnInfo) Reset() {
	*x = ConnInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_broker_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ConnInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ConnInfo) ProtoMessage() {}

func (x *ConnInfo) ProtoReflect() protoreflect.Message {
	mi := &file_broker_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ConnInfo.ProtoReflect.Descriptor instead.
func (*ConnInfo) Descriptor() ([]byte, []int) {
	return file_broker_proto_rawDescGZIP(), []int{0}
}

func (x *ConnInfo) GetServiceId() uint32 {
	if x != nil {
		return x.ServiceId
	}
	return 0
}

func (x *ConnInfo) GetNetwork() string {
	if x != nil {
		return x.Network
	}
	return ""
}

func (x *ConnInfo) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

var File_broker_proto protoreflect.FileDescriptor

var file_broker_proto_rawDesc = []byte{
	0x0a, 0x0c, 0x62, 0x72, 0x6f, 0x6b, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x5d, 0x0a, 0x08, 0x43, 0x6f, 0x6e, 0x6e, 0x49, 0x6e, 0x66,
	0x6f, 0x12, 0x1d, 0x0a, 0x0a, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x09, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x49, 0x64,
	0x12, 0x18, 0x0a, 0x07, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x12, 0x18, 0x0a, 0x07, 0x61, 0x64,
	0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61, 0x64, 0x64,
	0x72, 0x65, 0x73, 0x73, 0x32, 0x41, 0x0a, 0x0a, 0x47, 0x52, 0x50, 0x43, 0x42, 0x72, 0x6f, 0x6b,
	0x65, 0x72, 0x12, 0x33, 0x0a, 0x0b, 0x53, 0x74, 0x61, 0x72, 0x74, 0x53, 0x74, 0x72, 0x65, 0x61,
	0x6d, 0x12, 0x0f, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x43, 0x6f, 0x6e, 0x6e, 0x49, 0x6e,
	0x66, 0x6f, 0x1a, 0x0f, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x43, 0x6f, 0x6e, 0x6e, 0x49,
	0x6e, 0x66, 0x6f, 0x28, 0x01, 0x30, 0x01, 0x42, 0x09, 0x5a, 0x07, 0x2e, 0x3b, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_broker_proto_rawDescOnce sync.Once
	file_broker_proto_rawDescData = file_broker_proto_rawDesc
)

func file_broker_proto_rawDescGZIP() []byte {
	file_broker_proto_rawDescOnce.Do(func() {
		file_broker_proto_rawDescData = protoimpl.X.CompressGZIP(file_broker_proto_rawDescData)
	})
	return file_broker_proto_rawDescData
}

var file_broker_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_broker_proto_goTypes = []interface{}{
	(*ConnInfo)(nil), // 0: proto.ConnInfo
}
var file_broker_proto_depIdxs = []int32{
	0, // 0: proto.GRPCBroker.StartStream:input_type -> proto.ConnInfo
	0, // 1: proto.GRPCBroker.StartStream:output_type -> proto.ConnInfo
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_broker_proto_init() }
func file_broker_proto_init() {
	if File_broker_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_broker_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ConnInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_broker_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_broker_proto_goTypes,
		DependencyIndexes: file_broker_proto_depIdxs,
		MessageInfos:      file_broker_proto_msgTypes,
	}.Build()
	File_broker_proto = out.File
	file_broker_proto_rawDesc = nil
	file_broker_proto_goTypes = nil
	file_broker_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// GRPCBrokerClient is the client API for GRPCBroker service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type GRPCBrokerClient interface {
	StartStream(ctx context.Context, opts ...grpc.CallOption) (GRPCBroker_StartStreamClient, error)
}

type gRPCBrokerClient struct {
	cc grpc.ClientConnInterface
}

func NewGRPCBrokerClient(cc grpc.ClientConnInterface) GRPCBrokerClient {
	return &gRPCBrokerClient{cc}
}

func (c *gRPCBrokerClient) StartStream(ctx context.Context, opts ...grpc.CallOption) (GRPCBroker_StartStreamClient, error) {
	stream, err := c.cc.NewStream(ctx, &_GRPCBroker_serviceDesc.Streams[0], "/proto.GRPCBroker/StartStream", opts...)
	if err != nil {
		return nil, err
	}
	x := &gRPCBrokerStartStreamClient{stream}
	return x, nil
}

type GRPCBroker_StartStreamClient interface {
	Send(*ConnInfo) error
	Recv() (*ConnInfo, error)
	grpc.ClientStream
}

type gRPCBrokerStartStreamClient struct {
	grpc.ClientStream
}

func (x *gRPCBrokerStartStreamClient) Send(m *ConnInfo) error {
	return x.ClientStream.SendMsg(m)
}

func (x *gRPCBrokerStartStreamClient) Recv() (*ConnInfo, error) {
	m := new(ConnInfo)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// GRPCBrokerServer is the server API for GRPCBroker service.
type GRPCBrokerServer interface {
	StartStream(GRPCBroker_StartStreamServer) error
}

// UnimplementedGRPCBrokerServer can be embedded to have forward compatible implementations.
type UnimplementedGRPCBrokerServer struct {
}

func (*UnimplementedGRPCBrokerServer) StartStream(GRPCBroker_StartStreamServer) error {
	return status.Errorf(codes.Unimplemented, "method StartStream not implemented")
}

func RegisterGRPCBrokerServer(s *grpc.Server, srv GRPCBrokerServer) {
	s.RegisterService(&_GRPCBroker_serviceDesc, srv)
}

func _GRPCBroker_StartStream_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(GRPCBrokerServer).StartStream(&gRPCBrokerStartStreamServer{stream})
}

type GRPCBroker_StartStreamServer interface {
	Send(*ConnInfo) error
	Recv() (*ConnInfo, error)
	grpc.ServerStream
}

type gRPCBrokerStartStreamServer struct {
	grpc.ServerStream
}

func (x *gRPCBrokerStartStreamServer) Send(m *ConnInfo) error {
	return x.ServerStream.SendMsg(m)
}

func (x *gRPCBrokerStartStreamServer) Recv() (*ConnInfo, error) {
	m := new(ConnInfo)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

var _GRPCBroker_serviceDesc = grpc.ServiceDesc{
	ServiceName: "proto.GRPCBroker",
	HandlerType: (*GRPCBrokerServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "StartStream",
			Handler:       _GRPCBroker_StartStream_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "broker.proto",
}
